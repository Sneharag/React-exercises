import {Link} from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UseContext"; 


function User({user}) {

    // const username = useContext(UserContext);
    const {username,email} = useContext(UserContext);
    return (
        <div>
    <h3>Hello, {user.name}</h3>
    <h4>Email: {user.email}</h4>
    <p>Logged in as: {username}</p>
    <p>Logged email: {email}</p>
   <Link to={`/user/${user.id}`}>
   View details
   </Link>
    </div>
    );
}

export default User;
