import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

const ViewPosts = (props) => {
    const [allPosts, setAllPosts] = useState([]);
    const [oneComment, setOneComment] = useState({});
    const { user } = useContext(UserContext);

    //I think I'm going to have to render the map of allPosts
    //using useMemo to save resources/DB-calls.

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/getall`)
            .then(res => {
                setAllPosts(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const onePostCommentSubmitHandler = (e) => {
        e.preventDefault();
        // axios.put(`http://localhost:8000/api/posts/${oneComment.postID}`, oneComment)
        //     .then( res => {
        //         console.log("res from successful comment post", res)
        //         setOneComment({});
        //     })
        //     .catch(err => console.log("err adding comment", err));

        console.log(oneComment)
    }

    return (
        <>
            {allPosts.map((onePost, i) =>
                <div key={i} className="content-card">
                    <div className="content-card-profile-row">
                        {/* <span>ico<img src="" alt="." className="content-profile-picture" /></span> */}
                        <div className="name-field-container">
                            <h4>{onePost.userPostedBy}</h4>
                            {/* <span>time | public?</span> */}
                        </div>
                        <div className="content-card-options">
                            ...
                        </div>
                    </div>
                    <div className="content-card-context-description m-2 mb-3">
                        {onePost.userPostContent}
                    </div>
                    {/* if user posts picture */}
                    {/* <img src="" alt="img" className="content-card-img" /> */}

                    <div className="content-card-reactions">
                        {onePost.userPostLikedUsers.length >= 1
                            ? <><span><img src="" alt="." className="reaction-imgs" /></span>
                            <span>Reactions Name and (num) others</span></>
                            : null
                        }
                    </div>

                    <hr />

                    <div className="content-card-bottom-buttons">
                        <div className="content-card-button-actions">
                            <div className="content-card-action-buttons">
                                <img alt="." />👍 Like
                            </div>
                        </div>

                        <div className="content-card-button-actions">
                            <div className="content-card-action-buttons">
                                <img alt="." /> Comment
                            </div>
                        </div>

                        <div className="content-card-button-actions">
                            <div className="content-card-action-buttons">
                                <img alt="." /> Share
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="comments-section">
                        {/* <div className="displayed-comment">
                            some comment displayed here
                        </div> */}
                        {onePost.userPostUserComments.length >= 1
                            ? <a href="#">View {onePost.userPostUserComments.length} comment(s)</a>
                            : <p>Be the first to add a comment!</p>
                        }
                        <div className="comment-add-comment">
                            <img alt="." />
                            <form onSubmit={onePostCommentSubmitHandler}>
                                <input type="text" name="newPostComment" id="newPostComment" placeholder="Write a comment..." onChange={(e) => setOneComment({[e.target.name]: e.target.value, postID: onePost._id, userID: user._id})} />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ViewPosts;