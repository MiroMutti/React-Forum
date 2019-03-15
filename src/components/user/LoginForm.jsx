import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import withFormManager from './../../hocs/formManager';
import userModel from '../../model/userModel';
import userServices from '../../services/userServices';

class LoginForm extends Component {
/*    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password: null
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        requester.post('user', 'login', 'basic', this.state)
            .then(res => {
                observer.trigger(observer.events.loginUser, res.username)
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
                sessionStorage.setItem('username', res.username)
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
                this.props.history.push('/catalogue')
            })
            .catch(error => {
                console.log(error);
            })
    }
*/


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
                    password
                        <input
                        type="password"
                        name="password"
                        placeholder="enter password"
                        onChange={this.props.handleChange} />
                </label>
                <button className="button" type="submit">Log in</button>
            </form>
            <div className="paragraph">You don't have an account? <NavLink to="/register" className="button">Register</NavLink></div>
        </div>
    )
}
}

export default withFormManager(LoginForm, userModel, userServices.login)