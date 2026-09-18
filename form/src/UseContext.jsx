import { createContext,useState } from "react";
const UserContext = createContext();

export function UserProvider({children}) {
    const [username, setUsername] = useState("Roni");
    const [email,setEmail] = useState("roni@gmail.com");

    return (
        <UserContext.Provider value={{username,email,setUsername,setEmail}}>
            {/* render whatever is placed inside Userprovider */}
            {children}  {/* <App/> - children of userprovider */}
        </UserContext.Provider>
    );

}

export default UserContext;
