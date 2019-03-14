import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer';

export default class RegisterForm extends Component {
    constructor(props) {
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

        requester.post('user', '', 'basic', this.state)
            .then(res => {
                observer.trigger(observer.events.loginUser, res.username)
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
            })
            .catch(error => {
                console.log(error);
            })
    }

    render = () => {
        return (
            <div className="form-wrapper">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Username">
                        Username
                        <input
                            type="text"
                            name="username"
                            placeholder="enter username"
                            onChange={this.handleChange} />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder="enter password"
                            onChange={this.handleChange} />
                    </label>
                    <label htmlFor="repeatPassword">
                        Repeat Password
                        <input
                            type="password"
                            name="repeatPassword"
                            placeholder="repeat your password"
                            onChange={this.handleChange} />
                    </label>
                    <button className="button" type="submit">Register</button>
                </form>
                <div className="paragraph">You already have an account? <NavLink to="/login" className="button">Login</NavLink></div>
            </div>
        )
    }
}