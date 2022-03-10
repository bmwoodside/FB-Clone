import { useState } from "react";
import { Button } from "react-bootstrap";

const SignupForm = (props) => {
    const [userForm, setUserForm] = useState({});

    const onChangeHandler = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {
        //validate form, submit to DB, redirect
    }

    return (
        <>
            <form>
                <input type="text" name="firstName" onChange={onChangeHandler} id="firstName" placeholder="First name" />
                <input type="text" name="lastName" onChange={onChangeHandler} id="lastName" placeholder="Last name" />
                <input type="text" name="userEmail" onChange={onChangeHandler} id="userEmail" placeholder="Email (e.g. 'Someone@somewhere.com')" />
                <input type="password" name="userPassword" onChange={onChangeHandler} id="userPassword" placeholder="New Password" />
                <input type="password" name="confirmPassword" onChange={onChangeHandler} id="confirmPassword" placeholder="Confirm Password" />
            </form>
            <Button variant="secondary" onClick={props.handleClose}>Close</Button>
            <Button variant="success" onClick={submitForm}>Sign Up</Button>
        </>
    )
}

export default SignupForm;