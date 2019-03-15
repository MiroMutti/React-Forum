import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import withFormManager from './../../hocs/formManager';
import userModel from '../../model/userModel';
import userServices from '../../services/userServices';

class RegisterForm extends Component {

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
                            onChange={this.props.handleChange} />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder="enter password"
                            onChange={this.props.handleChange} />
                    </label>
                    <label htmlFor="repeatPassword">
                        Repeat Password
                        <input
                            type="password"
                            name="repeatPassword"
                            placeholder="repeat your password"
                            onChange={this.props.handleChange} />
                    </label>
                    <button className="button" type="submit">Register</button>
                </form>
                <div className="paragraph">You already have an account? <NavLink to="/login" className="button">Login</NavLink></div>
            </div>
        )
    }
}

export default withFormManager(RegisterForm, userModel, userServices.register)