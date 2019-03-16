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
                            minlength='5'
                            oninvalid={userModel.validate('Enter User Name Here')}
                            onChange={this.props.handleChange} 
                            value={this.props.username}/>
                    </label>
                    <label htmlFor="email">
                        E-mail
                        <input
                            type="email"
                            name="email"
                            placeholder="enter your email"
                            onChange={this.props.handleChange} 
                            value={this.props.email}/>
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder="enter password"
                            minlength='6'
                            onChange={this.props.handleChange} 
                            value={this.props.password}/>
                    </label>
                    <button className="button" type="submit">Register</button>
                </form>
                <div className="paragraph">You already have an account? <NavLink to="/login" className="button">Login</NavLink></div>
            </div>
        )
    }
}

export default withFormManager(RegisterForm, userModel, userServices.register)