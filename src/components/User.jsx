const User = ({user}) => {
    console.log(user);
    return (
        <div className="user-details">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    )
}

export default User