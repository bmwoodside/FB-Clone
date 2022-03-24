import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";


const CreatePost = (props) => {
    const { user } = useContext(UserContext);
    let placeholderText = `What's on your mind, ${user.firstName}`;
    const [statusUpdate, setStatusUpdate] = useState({
        idPostedBy: user._id,
        userPostedBy: user.firstName + " " + user.lastName[0] + ".",
        userPostContent: ""
    });

    const onChangeHandler = (e) => {
        setStatusUpdate({
            ...statusUpdate,
            [e.target.name]: e.target.value
        })
    }

    const statusSubmitHandler = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8000/api/posts/create", statusUpdate, {withCredentials: true})
            .then(res => {
                console.log("res from successful post", res)
                setStatusUpdate({
                    ...statusUpdate,
                    userPostContent: ""
                })
            })
            .catch(err => console.log("error from userPost attempt", err));
    }


    return (
        <div className="status-update-container">
            <div className="status-update-top">
                <img src="" alt="" />
                <form onSubmit={statusSubmitHandler}>
                    <input type="text" id="userStatusUpdate" name="userPostContent" placeholder={placeholderText} onChange={(e) => onChangeHandler(e)} value={statusUpdate.userPostContent} />
                </form>
            </div>

            <hr />

            <div className="status-update-bottom">
                <div className="status-update-bottom-button">
                    <img src="" alt="ico"/>
                    <span>Live Video</span>
                </div>

                <div className="status-update-bottom-button">
                    <img src="" alt="ico"/>
                    <span>Photo/Video</span>
                </div>

                <div className="status-update-bottom-button">
                    <img src="" alt="ico"/>
                    <span>Feeling/Activity</span>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;