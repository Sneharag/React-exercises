import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [user,setUser]=useState(null);

    useEffect(() => {
        async function getUser() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            
            const data = await response.json();

            setUser(data);
        }
        getUser();
    }, [id]); //effect runs when id changes

    if (!user){
        return <p>Loading...</p>
    }

    return (
        <div>
            <button onClick={() => navigate("/")}>
                Back to Users
            </button>
            <h2>User details</h2>
            <p>User ID: {id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>City: {user.address.city}</p>
            <p>Company: {user.company.name}</p>
        </div>
    );
}
export default UserDetails;