import { createContext ,useState } from "react";


export const authcontext = createContext()

export const Authprovider =(children)=>{
    const [user,setUser] = useState(null)
    const saveAuthinfo= (userinfo)=>{
        localStorage.setItem('token',userinfo.jwt)
        setUser({id:userinfo.id,name:userinfo.name ,email:userinfo.email})
console.log(userinfo)
    }
const value={saveAuthinfo ,user}
    return <authcontext.Provider value={value}>{children}</authcontext.Provider>
}