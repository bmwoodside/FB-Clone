import { useState } from "react";
import { useHistory } from "react-router-dom";


const LoginForm = (props) => {
    const history = useHistory();
    const [tempLogin, setTempLogin] = useState({});

    const onChangeHandler = (e) => {
        setTempLogin({
            ...tempLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        // validate then axios call to submit.
        e.preventDefault()

        history.push("/"); // I think best practice here will be to hard-redirect instead of just changing components.
    }

    const ModalSignUp = () => {
        // launch modal window with the sign-up form on it
    }

    return (
        <div className="login-card">
            <input type="text" name="emailInput" id="login-email-field" placeholder="Email: someone@somewhere.com" onChange={ (e) => onChangeHandler(e) } />
            <input type="text" name="passwordInput" id="login-password-field" placeholder="Password" onChange={ (e) => onChangeHandler(e) } />

            <button className="btn btn-primary" onClick={handleLogin}>Log In</button>

            <a href="#">Forgot password?</a>

            <hr />

            <button className="btn btn-success" onClick={ModalSignUp}>Create new account</button>

        </div>
    )
}

export default LoginForm;