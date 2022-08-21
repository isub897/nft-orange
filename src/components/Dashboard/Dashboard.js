import React from "react";
// import ProfilePic from "./ProfilePic/ProfilePic";
import UserData from "./UserData/UserData"
import "./Dashboard.css";

const Dashboard = ({signinChange, routeChange, user}) => {

    const stateReset = async () => {
        routeChange("signin");
        signinChange(false);
        const response = await fetch('http://localhost:3000/logout', {
            credentials: 'include'
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="dashboard">
            {/* <ProfilePic /> */}
            <UserData user={user} />'
            <div className="gap"></div>
            <button type="button" onClick={()=> stateReset()} >Sign Out</button>
        </div>
    )
}

export default Dashboard;

// When i have time in future, i should try to finish off the profile pic section