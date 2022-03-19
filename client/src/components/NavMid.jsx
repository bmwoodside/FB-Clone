import { useEffect, useState } from "react";
import axios from 'axios';


const Main = (props) => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/getall`)
            .then(res => {
                setAllPosts(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="wrapper">

            <div className="body-nav-center">
                <div className="story-card-container">
                    <div className="story-card" id="my-story-card">
                        <img src="" alt="" />
                        <p>+</p>
                        <p>Create Story</p>
                    </div>
                    <button className="btn btn-info story-card">pic</button>
                    <button className="btn btn-info story-card">pic</button>
                    <button className="btn btn-info story-card">pic</button>
                    <button className="btn btn-info story-card">pic</button>
                    <button className="btn btn-info story-card">pic</button>
                </div>

                <div className="status-update-container">
                    <div className="status-update-top">
                        ico<img src="" alt="" /> <input type="text" placeholder="What's on your mind, Name"/>
                    </div>

                    <hr />

                    <div className="status-update-bottom">
                        <div className="status-update-bottom-button">
                            ico <img />
                            <span>Live Video</span>
                        </div>

                        <div className="status-update-bottom-button">
                            ico <img />
                            <span>Photo/Video</span>
                        </div>

                        <div className="status-update-bottom-button">
                            ico <img />
                            <span>Feeling/Activity</span>
                        </div>
                    </div>
                </div>

                <div className="content-card">
                    <div className="content-card-profile-row">
                        <span>ico<img src="" alt="." className="content-profile-picture" /></span>
                        <div className="name-field-container">
                            <h4>Person Name Here</h4>
                            <span>time | public?</span>
                        </div>
                        <div className="content-card-options">
                            ...
                        </div>
                    </div>
                    <div className="content-card-context-description">
                        post description and text area here
                    </div>
                    <img src="" alt="img" className="content-card-img" />
                    {/* how do i handle if it's an image that's been shared? */}
                    <div className="content-card-reactions">
                        <span><img src="" alt="." className="reaction-imgs" /></span>
                        <span>Reactions Name and (num) others</span>
                    </div>

                    <div className="content-card-bottom-buttons">
                        <div className="content-card-button-actions">
                            <div className="content-card-action-buttons">
                                <img alt="."/> Like
                            </div>
                        </div>

                        <div className="content-card-button-actions">
                            <div className="content-card-action-buttons">
                                <img alt="."/> Comment
                            </div>
                        </div>

                        <div className="content-card-button-actions">
                            <div className="content-card-action-buttons">
                                <img alt="."/> Share
                            </div>
                        </div>
                    </div>

                    <div className="comments-section">
                        <div className="displayed-comment">
                            some comment displayed here
                        </div>
                        <a href="#">View (num) comment(s)</a>
                        <div className="comment-add-comment">
                            <img alt="."/>
                            <input type="text" name="" id="" placeholder="Write a comment..." />
                        </div>
                    </div>
                </div>
                
                <div className="content-card">
                    <div className="content-card-profile-row">
                        <span>ico<img src="" alt="." className="content-profile-picture" /></span>
                        <div className="name-field-container">
                            <h4>Person Name Here</h4>
                            <span>time | public?</span>
                        </div>
                        <div className="content-card-options">
                            ...
                        </div>
                    </div>
                    <div className="content-card-context-description">
                        post description and text area here
                    </div>
                    <img src="" alt="img" className="content-card-img" />
                    {/* how do i handle if it's an image that's been shared? */}
                    <div className="content-card-reactions">
                        <span><img src="" alt="." className="reaction-imgs" /></span>
                        <span>Reactions Name and (num) others</span>
                    </div>

                    <div className="content-card-bottom-buttons">
                        <div className="content-card-button-actions">
                            <div className="content-card-action-buttons">
                                <img alt="."/> Like
                            </div>
                        </div>

                        <div className="content-card-button-actions">
                            <div className="content-card-action-buttons">
                                <img alt="."/> Comment
                            </div>
                        </div>

                        <div className="content-card-button-actions">
                            <div className="content-card-action-buttons">
                                <img alt="."/> Share
                            </div>
                        </div>
                    </div>

                    <div className="comments-section">
                        <div className="displayed-comment">
                            some comment displayed here
                        </div>
                        <a href="#">View (num) comment(s)</a>
                        <div className="comment-add-comment">
                            <img alt="."/>
                            <input type="text" name="" id="" placeholder="Write a comment..." />
                        </div>
                    </div>
                </div>

                <h1>Placeholder Text Here!</h1>
                <h4>Test Mapping Data follows:</h4>

                <ul>
                    {allPosts.map((onePost, i) =>
                        <li key={i}>
                            {onePost["userPostedBy"]}:
                            <p>{ onePost["userPostContent"] }</p>
                            <p>Likes: { onePost["userPostLikedUsers"].length }</p>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    )
}

export default Main;