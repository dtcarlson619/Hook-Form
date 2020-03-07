import React, { useState } from 'react';

const Form = props => {
    const [formState, setFormState] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <br/>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <br/>
                {formState.firstName.length > 0 && formState.firstName.length < 2 && (
                    <span className="redtext">Must be at least 2 characters</span>
                )}
                <br/>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <br/>
                {formState.lastName.length > 0 &&formState.lastName.length < 2 && (
                    <span className="redtext">Must be at least 2 characters</span>
                )}
                <br/>
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/>
                {formState.email.length > 0 && formState.email.length < 5 && (
                    <span className="redtext">Must be at least 5 characters</span>
                )}
                <br/>
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>
                {formState.password.length > 0 && formState.password.length < 8 && (
                    <span className="redtext">Must be at least 8 characters </span>
                )}
                <br/>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/>
                {formState.confirmPassword != formState.password && (
                    <span className="redtext">Passwords must match</span>
                )}
                <br/>
                <input type="submit"/>
            </form>
            <h3>Your Form Data</h3>
            <p>First Name: {formState.firstName}</p>
            <p>Last Name: {formState.lastName}</p>
            <p>Email: {formState.email}</p>
            <p>Password: {formState.password}</p>
            <p>Confirm Password: {formState.confirmPassword}</p>
        </div>
    );
    
}

export default Form;