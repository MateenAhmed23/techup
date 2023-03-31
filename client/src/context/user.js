import { createContext, useState } from "react";


const UserContext = createContext()


function Provider({children}){

    const [count, setCount] = useState(5);


    const valueToShare=  {
        count: count,
        incrementCount: ()=>{
            setCount(count+1)
        }
    }

    return (
        <UserContext.Provider value={valueToShare}>
            {children}
        </UserContext.Provider>
    )
}

export {Provider}
export default UserContext;