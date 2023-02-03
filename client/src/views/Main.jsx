import './main.css'
import NavTop from '../components/Nav/NavTop';
import NavLeft from "../components/Nav/NavLeft";
import NavMid from "../components/Nav/NavMid";
import NavRight from "../components/Nav/NavRight";
import { useContext } from "react";
import { UserContext } from '../components/UserContext';


const Main = (props) => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="wrapper">
            {/* <NavTop /> */}
            <NavLeft />
            <NavMid />
            <NavRight />
        </div>

    )

}

export default Main;