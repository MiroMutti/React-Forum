import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import withFormManager from './../../hocs/formManager';
import userModel from '../../model/userModel';
import userServices from '../../services/userServices';

class LoginForm extends Component {

render = () => {

    return (
        <div className="form-wrapper">
            <h2>Login</h2>
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="Username">
                    Username
                        <input
                        type="text"
                        name="username"
                        placeholder="enter username"
                        onChange={this.props.handleChange} required/>
                </label>
                <label htmlFor="password">
                    password
                        <input
                        type="password"
                        name="password"
                        placeholder="enter password"
                        onChange={this.props.handleChange} required/>
                </label>
                <button className="button" type="submit">Log in</button>
            </form>
            <div className="paragraph">You don't have an account? <NavLink to="/register" className="button">Register</NavLink></div>
        </div>
    )
}
}

export default withFormManager(LoginForm, userModel, userServices.login)