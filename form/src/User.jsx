import {Link} from "react-router-dom";


function User({user}) {
    return (
        <div>
    <h3>Hello, {user.name}</h3>
    <h4>Email: {user.email}</h4>
   <Link to={`/user/${user.id}`}>
   View details
   </Link>
    </div>
    );
}
export default User;
