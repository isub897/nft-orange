import React from "react";
import './UserData.css'

const UserData = ({user}) => {
    return (
        <div className="userdata">
            <p>{`Username: ${user.username}`}</p>
            <p>{`Email: ${user.email}`}</p>
            <p>{`Joined: ${user.joined}`}</p>
            <p>{`Logins: ${user.logins}`}</p>
        </div>
    )
}

export default UserData;