import './main.css'
import Nav from './Nav';
import NavLeft from "../components/NavLeft";
import NavMid from "../components/NavMid";
import NavRight from "../components/NavRight";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import LoginForm from "../components/LoginForm";
import { UserContext } from '../components/UserContext';


const Main = (props) => {
    // const [user, setUser] = useState(null); // will have all info ( firstName, lastName, email, hashedpassword... consider destructuring backend response before sending forward.)
    // const [isLoginAttempt, setIsLoginAttempt] = useState(false); // can I set this in the dependency array to refresh the component state after login?

    // testing use context
    const { user, setUser } = useContext(UserContext);

    // useEffect( () => {
    //     axios.get('http://localhost:8000/api/users/getLoggedInUser', { withCredentials: true })
    //         .then(res => {
    //             if (res.data.results) { //returns entire user object from the DB (consider destructuring in DB response)
    //                 setUser(res.data.results);
    //             }
    //         })
    //         .catch(err => {
    //             // console.log('error when getting logged in user', err)
    //         })
    // }, [isLoginAttempt])

//     return (
//         <>
//             {!user 
//                 ? 
//                     <div className="wrapper">
//                         <LoginForm setIsLoginAttempt={setIsLoginAttempt} />
//                     </div>
//                 : 
//                     <div className="wrapper">
//                         <Nav user={user} />
//                         <NavLeft />
//                         <NavMid user={user} />
//                         <NavRight setIsLoginAttempt={setIsLoginAttempt}/>
//                     </div>
//             }
//         </>
//     )

// }

    return (
        // <h1>Something's First Name: {user.firstName}</h1>
        <div className="wrapper">
            {/* <Nav /> */}
            <NavLeft />
            <NavMid />
            <NavRight />
        </div>

    )

}

export default Main;