import './main.css'
import Nav from './Nav';
import NavLeft from "../components/NavLeft";
import NavMid from "../components/NavMid";
import NavRight from "../components/NavRight";
import { useContext } from "react";
import { UserContext } from '../components/UserContext';


const Main = (props) => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="wrapper">
            {/* <Nav /> */}
            <NavLeft />
            <NavMid />
            <NavRight />
        </div>

    )

}

export default Main;