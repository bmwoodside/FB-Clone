import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewOne = (props) => {
    const { _id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${_id}`, {withCredentials: true})
            .then(res => {
                console.log("viewing one user", res);
                setUser(res.data);
            })
            .catch(err => console.log("oh snap an error", err));
    })


    return (
        <h1>YOU MADE IT TO THE VIEW ONE PAGE {user.firstName}!</h1>
    )
}

export default ViewOne;