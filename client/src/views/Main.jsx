import { Link } from "react-router-dom";
import './main.css'


const Main = (props) => {


    return (
        <div className="wrapper">
            <div className="body-nav-left">
                <div className="body-nav-left-top">
                    <Link to="#"><button className="btn btn-info">ico Name</button></Link>
                    <Link to="#"><button className="btn btn-info">ico Friends</button></Link>
                    <Link to="#"><button className="btn btn-info">ico Groups</button></Link>
                    <Link to="#"><button className="btn btn-info">ico Marketplace</button></Link>
                    <Link to="#"><button className="btn btn-info">ico Watch</button></Link>
                    <Link to="#"><button className="btn btn-info">ico Memories</button></Link>
                    <Link to="#"><button className="btn btn-info">ico See More</button></Link>
                    
                    <hr />

                    <h4>Your Shortcuts</h4>
                    <Link to="#"><button className="btn btn-info">ico Game1</button></Link>
                    <Link to="#"><button className="btn btn-info">ico Group1</button></Link>
                    <Link to="#"><button className="btn btn-info">ico Group2</button></Link>
                    <Link to="#"><button className="btn btn-info">ico Game2</button></Link>
                    <Link to="#"><button className="btn btn-info">ico Game3</button></Link>
                    <Link to="#"><button className="btn btn-info">ico See More</button></Link>
                </div>

                <div className="body-nav-left-bottom">
                    <p>Privacy | Terms | Advertising | Ad Choices | Cookies | More | C 2022</p>
                </div>
            </div>

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
            </div>

            <div className="body-nav-right">
                <div className="body-nav-right-top">
                    <div className="info-card">
                        <div className="info-card-row1">
                            <span>ico Birthdays</span>
                            <span><button className="btn-small btn-danger">X</button></span>
                        </div>
                        <p>
                            <strong>NAME</strong>'s birthday is today.
                        </p>
                    </div>
                </div>

                <hr />

                <div className="body-nav-right-bottom">
                    <div className="body-nav-right-bottom-header">
                        <span>Contacts</span>
                        <span>
                            <button className="btn-small btn-info">cam</button>
                            <button className="btn-small btn-info">search</button>
                            <button className="btn-small btn-info">...</button>
                        </span>
                    </div>

                    {/* map list of contacts that are online here */}
                    <button className="btn btn-info">ico Name</button>
                    <button className="btn btn-info">ico Name</button>
                    <button className="btn btn-info">ico Name</button>
                    <button className="btn btn-info">ico Name</button>
                    <button className="btn btn-info">... etc</button>
                </div>
            </div>

            
        </div>
    )
}

export default Main;