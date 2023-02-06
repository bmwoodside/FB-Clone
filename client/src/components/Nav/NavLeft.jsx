import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const NavLeft = (props) => {

    const { user, setUser } = useContext(UserContext);


    return (
        <div className="body-nav-left">
            <div className="body-nav-left-top">
                <Link to="/"><button className="btn btn-info">🏠 Home</button></Link>
                <Link to={`/${user._id}`}><button className="btn btn-info">icon {user.firstName + " " + user.lastName}</button></Link>

                <hr />

                <Link to="#"><button className="btn btn-info" disabled>icon Friends</button></Link>
                <Link to="#"><button className="btn btn-info" disabled>icon Groups</button></Link>
                <Link to="#"><button className="btn btn-info" disabled>icon Marketplace</button></Link>
                <Link to="#"><button className="btn btn-info" disabled>icon Watch</button></Link>
                <Link to="#"><button className="btn btn-info" disabled>icon Memories</button></Link>
                <Link to="#"><button className="btn btn-info" disabled>icon See More</button></Link>

                <hr />

                <h4>Your Shortcuts</h4>
                <Link to="#"><button className="btn btn-info" disabled>icon Game1</button></Link>
                <Link to="#"><button className="btn btn-info" disabled>icon Group1</button></Link>
                <Link to="#"><button className="btn btn-info" disabled>icon Group2</button></Link>
                <Link to="#"><button className="btn btn-info" disabled>icon Game2</button></Link>
                <Link to="#"><button className="btn btn-info" disabled>icon Game3</button></Link>
                <Link to="#"><button className="btn btn-info" disabled>icon See More</button></Link>
            </div>

            <div className="body-nav-left-bottom">
                <p>Privacy | Terms | Advertising | Ad Choices | Cookies | More | © 2022</p>
            </div>
        </div>
    )
}

export default NavLeft;