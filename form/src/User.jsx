function User({user}) {
    return (
        <div>
    <h3>Hello, {user.name}</h3>
    <h4>Email: {user.email}</h4>
    <h4>Phone: {user.phone}</h4>
    </div>
    )
}
export default User;
