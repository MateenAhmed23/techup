import { createContext, useState } from "react";


const UserContext = createContext()


function Provider({children}){

    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [companyId, setCompanyId] = useState('')
    const [userRole, setUserRole] = useState('')


    const verifyToken = async (token)=>{
        try{
            const res = await fetch('http://127.0.0.1:5000/api/verify-token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token // Include the token in the Authorization header
              }
            })
            // console.log('HAHA')
            const r = await res.json()
    
            // console.log(r)
            // console.log(r.payload.userId)
    
            return r
            // console.log(r)
          }catch(e){
            return { valid : false}
            
          }
    }


    const getUserInformation = async ()=>{

        isLoading(true)

        try{
            const res = await fetch('http://127.0.0.1:5000/api/get-user-info', {
              method: 'POST',
              body:JSON.stringify({
                userId
              })
            })
            // console.log('HAHA')
            const data = await res.json()

            setCompanyId(data.companyId)
            setUserEmail(data.userEmail)
            setUserRole(data.userRole)
    
            
          }catch(e){
            setIsLoggedIn(false)
            localStorage.setItem("token", '');
            setUserId('')
          }

          isLoading(false)

    }

    const loginStatus = async ()=>{


        console.log('I am here')

        setIsLoading(true)
        if (isLoggedIn){

            setIsLoading(false)
            return true
        }

        const token = localStorage.getItem('token')

        // console.log(' Token is ', token)



        // token exists
        if (token)
        {
            const res = await verifyToken(token)
            // console.log('Inside loginStatus', res.valid)
            if (res.valid){
                // console.log('I am returning valid')
                console.log(res.payload)

                setUserId(res.payload.userId)
                console.log(userId)
                console.log(res.payload.userId)
                setIsLoggedIn(true)
                // setUserEmail(res.payload.email)
                setIsLoading(false)

                getUserInformation()

                return true
            }
        }

        setIsLoading(false)
        return false
    }

    const signOutUser = ()=>{
        setIsLoading(true)
        setIsLoggedIn(false)
        setUserId('')
        setUserEmail('')
        setCompanyId('')
        setUserRole('')

    }


    const userInfo = {
        userEmail,
        userId: userId,
        companyId,
        userRole
        // userRole
    }

    const valueToShare=  {
        isLoading,
        isLoggedIn,
        loginStatus,
        userInfo,
        signOutUser
    }

    return (
        <UserContext.Provider value={valueToShare}>
            {children}
        </UserContext.Provider>
    )
}

export {Provider}
export default UserContext;