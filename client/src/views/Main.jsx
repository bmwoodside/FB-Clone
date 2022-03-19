import './main.css'
import NavLeft from "../components/NavLeft";
import NavMid from "../components/NavMid";
import NavRight from "../components/NavRight";
import { useEffect, useState } from "react";
import axios from 'axios';
import LoginForm from "../components/LoginForm";


const Main = (props) => {
    const [user, setUser] = useState(null); // will have all info ( firstName, lastName, email, hashedpassword... consider destructuring backend response before sending forward.)

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/getLoggedInUser', { withCredentials: true })
            .then(res => {
                if (res.data.results) { //returns entire user object from the DB (consider destructuring in DB response)
                    setUser(res.data.results);
                }
            })
            .catch(err => {
                console.log('error when getting logged in user', err)
            })
    }, [])

    return (
        <>
            {!user ? 
                <div className="wrapper">
                    <LoginForm />
                </div>
            : 
                <div className="wrapper">
                    <NavLeft />
                    <NavMid />
                    <NavRight />
                </div>
            }
        </>
    )

}

export default Main;