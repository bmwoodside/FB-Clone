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