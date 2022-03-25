import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

const ViewOne = (props) => {
    const { _id } = useParams();
    const [lookupUser, setLookupUser] = useState({});
    const { user, setUser } = useContext(UserContext);
    const [oneComment, setOneComment] = useState({});

    const [oneUserPosts, setOneUserPosts] = useState([]);

    useEffect(() => {
        // if (!user) history.push("/");

        axios.get(`http://localhost:8000/api/users/${_id}`, { withCredentials: true })
            .then(res => {
                console.log("viewing one user", res);
                setLookupUser(res.data);

                axios.get(`http://localhost:8000/api/posts/getAllPostsByUserId/${_id}`)
                    .then(userPosts => {
                        console.log("userPosts", userPosts);
                        setOneUserPosts(userPosts.data);
                    })
                    .catch(err => console.log("err getting user posts:", err));
            })
            .catch(err => console.log("oh snap an error", err));
    }, [])

    const onePostCommentSubmitHandler = (e) => {
        e.preventDefault();

        //todo: fix adding comments
        // axios.put(`http://localhost:8000/api/posts/${oneComment.postID}`, oneComment)
        //     .then( res => {
        //         console.log("res from successful comment post", res)
        //         setOneComment({});
        //     })
        //     .catch(err => console.log("err adding comment", err));

        console.log(oneComment)
    }

    return (
        <div className="view-one-user-view">
            <div className="user-info">
                <div className="user-info-top">
                    <img src="" alt="user profile picture" id='user-profile-image' />
                    <div className="user-name-friends">
                        <h1 className="user-name">{lookupUser.firstName + " " + lookupUser.lastName}</h1>
                        <h4 className="user-friends-count">{lookupUser.userFriends?.length} Friends</h4>
                    </div>
                    <div className="user-friend-message-buttons">
                        <button className="btn btn-secondary" disabled>😎 Add Friend</button>
                        <button className="btn btn-primary" disabled>🐱‍💻 Message</button>
                        <p>*buttons temporarily disabled*</p>
                    </div>
                </div>
            </div>

            <hr />

            <div className="one-user-posts">
                {oneUserPosts.map((onePost, i) =>
                    <div key={i} className="content-card">
                        <div className="content-card-profile-row">
                            {/* <span>ico<img src="" alt="." className="content-profile-picture" /></span> */}
                            <div className="name-field-container">
                                <h4><Link to={`/${onePost.idPostedBy}`}>{onePost.userPostedBy}</Link></h4>
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
                                    <button className="btn btn-info btn-sm">👍 Like</button>
                                </div>
                            </div>

                            <div className="content-card-button-actions">
                                <div className="content-card-action-buttons">
                                <button className="btn btn-info btn-sm">🐱‍💻 Comment</button>
                                </div>
                            </div>

                            <div className="content-card-button-actions">
                                <div className="content-card-action-buttons">
                                <button className="btn btn-info btn-sm">🎁 Share</button>
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
                                    <input type="text" name="newPostComment" id="newPostComment" placeholder="Write a comment..." onChange={(e) => setOneComment({ [e.target.name]: e.target.value, postID: onePost._id, userID: user._id })} />
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default ViewOne;