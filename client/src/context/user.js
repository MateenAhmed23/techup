import { createContext, useState } from "react";


const UserContext = createContext()


function Provider({children}){

    // const [count, setCount] = useState(5);


    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [userRole, setUserRole] = useState('')
    const [userID, setUserID] = useState('')
    const [userEmail, setUserEmail] = useState('')

    // const hehe = ()=>{
    //     setCount(count+1)
    // }


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

    const loginStatus = async ()=>{


        // console.log('I am here')

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
                setIsLoggedIn(true)
                setUserID(res.userId)
                setUserEmail(res.email)
                setIsLoading(false)

                return true
            }
        }

        setIsLoading(false)
        return false
    }

    const userInfo = {
        userEmail,
        userID,
        // userRole
    }

    const valueToShare=  {
        isLoading,
        isLoggedIn,
        loginStatus,
        userInfo
        // count: count,
        // incrementCount: hehe
    }

    return (
        <UserContext.Provider value={valueToShare}>
            {children}
        </UserContext.Provider>
    )
}

export {Provider}
export default UserContext;