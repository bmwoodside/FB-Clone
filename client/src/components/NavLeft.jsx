import { Link } from "react-router-dom";

const NavLeft = (props) => {


    return (
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
    )
}

export default NavLeft;