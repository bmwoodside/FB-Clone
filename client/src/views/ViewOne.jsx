import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

const ViewOne = (props) => {
    const { _id } = useParams();
    // const [user, setUser] = useState({});
    const { user, setUser } = useContext(UserContext);

    const history = useHistory();

    console.log(user)

    if (!user) {history.push("/")}

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${_id}`, {withCredentials: true})
            .then(res => {
                console.log("viewing one user", res);
                // setUser(res.data);
            })
            .catch(err => console.log("oh snap an error", err));
    })


    return (
        // <h1>YOU MADE IT TO THE VIEW ONE PAGE {user.firstName}!</h1>
        <h1>YOU MADE IT TO THE VIEW ONE PAGE OF WHOEVER!</h1>
    )
}

export default ViewOne;