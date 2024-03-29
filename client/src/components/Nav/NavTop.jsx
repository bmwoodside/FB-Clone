import { Link } from "react-router-dom";
import "./nav.css"


const NavTop = (props) => {


    return (
        <div className="nav-wrapper">
            <div className="search">
                <button className="btn-info">ico</button>
                <input type="text" name="" id="searchbar" />
            </div>

            <div className="center-icons">
                <Link to="#"><button className="btn btn-info" id="home">home</button></Link>
                <Link to="#"><button className="btn btn-info" id="watch">watch</button></Link>
                <Link to="#"><button className="btn btn-info" id="marketplace">marketplace</button></Link>
                <Link to="#"><button className="btn btn-info" id="groups">groups</button></Link>
                <Link to="#"><button className="btn btn-info" id="news">news</button></Link>
            </div>

            <div className="nav-right">
                <Link to={`/${props.user._id}`}><button className="btn btn-info"><img src="" alt="" />{props.user.firstName}</button></Link>
                <Link to="#"><button className="btn btn-info">...</button></Link>
                <Link to="#"><button className="btn btn-info">bell</button></Link>
                <Link to="#"><button className="btn btn-info">notify</button></Link>
                <Link to="#"><button className="btn btn-info">acct</button></Link>
                {/* add logout button here - temporarily is in nav-Right component */}
            </div>
        </div>
    )
}

export default NavTop;