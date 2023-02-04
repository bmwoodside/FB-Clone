import axios from "axios";
import { useEffect } from "react";



const AllUsers = () => {


    useEffect(() => {
        axios.get('http://localhost:8000/api/users/getall')
            .then( res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <h1>fuck you</h1>
    )
}

export default AllUsers;