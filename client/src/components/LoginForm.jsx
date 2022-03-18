import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalTitle, ModalBody } from "react-bootstrap";
import SignupForm from "./SignupForm";
import axios from "axios";

const LoginForm = (props) => {
    const history = useHistory();
    const [tempLogin, setTempLogin] = useState({});
    const [loginErrors, setLoginErrors] = useState({});

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
        console.log(tempLogin)
        axios.post("http://localhost:8000/api/users/login", tempLogin, {withCredentials: true})
            .then(res => {
                console.log("response when logging in", res)
                if (res.data.error) {
                    setLoginErrors(res.data)
                } else {
                    // history.push("/"); // I think best practice here will be to hard-redirect instead of just changing components.
                }
                
            })
            .catch(err => console.log("get account error", err))
    }

    return (
        <div className="form-group">
            <p className="text-danger">{loginErrors?.error}</p>
            <input type="text" name="userEmail" className="form-control" id="userEmail" placeholder="Email: someone@somewhere.com" onChange={ (e) => onChangeHandler(e) } />
            <input type="password" name="userPassword" className="form-control" id="userPassword" placeholder="Password" onChange={ (e) => onChangeHandler(e) } />

            <Button variant="primary" onClick={handleLogin}>Log In</Button>

            <a href="#">Forgot password?</a>

            <hr />

            <Button variant="success" onClick={handleShow}>Create New Account</Button>


            {/* stuff */}
            <Modal show={show} onHide={handleClose} backdrop="static" centered>
                <ModalHeader closeButton>
                    <ModalTitle>Sign Up<h5>It's quick and easy.</h5></ModalTitle>
                    
                </ModalHeader>
                <ModalBody>
                    <SignupForm handleClose={handleClose}/>
                </ModalBody>
            </Modal>

        </div>
    )
}

export default LoginForm;