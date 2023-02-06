import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";


const NavRight = (props) => {

    const { user, setUser } = useContext(UserContext);

    const LogoutUser = () => {
        axios.get("http://localhost:8000/api/users/logout", {withCredentials: true})
            .then(res => {
                console.log("logged out user", res)
                // props.setIsLoginAttempt(false);
                setUser(null);
            })
            .catch(err => console.log("some error, apparently:", err))
    }


    return (
        <div className="body-nav-right">
            <div className="body-nav-right-top">
                <div className="info-card">
                    {/* I'm a temp button to handle logging out for now, delete me before production! */}
                    <button className="btn btn-danger mb-2" onClick={LogoutUser}>Logout</button>
                    
                    {/* <div className="info-card-row1">
                        <h5>🎂 Birthdays:</h5>
                        <p><button className="btn-small btn-danger">X</button></p>
                    </div>

                    <p>
                        <strong>NAME</strong>'s birthday is today.
                    </p> */}
                </div>
            </div>

            <hr />

            <div className="body-nav-right-bottom">
                <div className="body-nav-right-bottom-header">
                    <span>Contacts</span>
                    <span>
                        <button className="btn-sm btn-info" disabled>cam</button>
                        <button className="btn-sm btn-info" disabled>search</button>
                        <button className="btn-sm btn-info" disabled>...</button>
                    </span>
                </div>

                {/* map list of contacts that are online here */}
                {/* <button className="btn btn-light">👩 Name</button>
                <button className="btn btn-light">👩 Name</button>
                <button className="btn btn-light">👩 Name</button>
                <button className="btn btn-light">👩 Name</button>
                <button className="btn btn-light">... etc</button> */}
                {user.userFriends.map((oneFriend, i) =>
                    <Link to={`/${oneFriend._id}`} key={i}><button className="btn btn-light">👩 {oneFriend.firstName + " " + oneFriend.lastName}</button></Link>
                )}
            </div>
        </div>
    )
}

export default NavRight;