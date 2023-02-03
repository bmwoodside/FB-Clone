import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalTitle, ModalBody } from "react-bootstrap";
import SignupForm from "./SignupForm";
import axios from "axios";
import { UserContext } from "../UserContext";

const LoginForm = (props) => {
    const history = useHistory();
    const [tempLogin, setTempLogin] = useState({});
    const [loginErrors, setLoginErrors] = useState({});

    // testing useContext
    const { user, setUser } = useContext(UserContext);

    // state for handling Modal component.
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChangeHandler = (e) => {
        setTempLogin({
            ...tempLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        // validate then axios call to submit.
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/login", tempLogin, {withCredentials: true})
            .then(res => {
                console.log("response when logging in", res)
                if (res.data.error) {
                    setLoginErrors(res.data)
                } else {
                    // props.setIsLoginAttempt(true);
                    // setUser(res.data)

                    axios.get("http://localhost:8000/api/users/getLoggedInUser", {withCredentials: true})
                        .then(res => {
                            if (res.data.results) {
                                setUser(res.data.results);
                            }
                        })
                        .catch(err => console.log("Error checking userToken in LoginForm", err))
                }
                
            })
            .catch(err => console.log("get account error", err))
    }

    return (
        <div className="form-group">
            <form onSubmit={handleLogin}>
                <p className="text-danger">{loginErrors?.error}</p>
                <input type="text" name="userEmail" className="form-control" id="userEmail" placeholder="Email: someone@somewhere.com" onChange={ (e) => onChangeHandler(e) } />
                <input type="password" name="userPassword" className="form-control" id="userPassword" placeholder="Password" onChange={ (e) => onChangeHandler(e) } />

                <Button type="submit" variant="primary" >Log In</Button>
            </form>

            <a href="#">Forgot password?</a>

            <hr />

            <Button variant="success" onClick={handleShow}>Create New Account</Button>


            {/* Modal Registration stuff */}
            <Modal show={show} onHide={handleClose} backdrop="static" centered>
                <ModalHeader closeButton>
                    <ModalTitle>Sign Up<h5>It's quick and easy.</h5></ModalTitle>
                    
                </ModalHeader>
                <ModalBody>
                    <SignupForm handleClose={handleClose} setIsLoginAttempt={props.setIsLoginAttempt}/>
                </ModalBody>
            </Modal>

        </div>
    )
}

export default LoginForm;