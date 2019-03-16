import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import '../App.scss'

function isLoggedIn(Component, role) {
    return class IsLoggedIn extends Component {
        constructor(props) {
            super(props)
            this.state = {
                roles: []
            }
        }

        componentDidMount = () => {
            let roles = sessionStorage.getItem('userRoles')
            if (roles !== null)
            this.setState({roles: roles.split(',')})
        }

        render = () => {
            
            let userHasAccess = this.state.roles.indexOf(role) !== -1;

            if(userHasAccess) {
                return <Component {...this.props} />
            } else {
                return <div  className='unauthorized'>
                <h2>To access this page, you must log in first.</h2>
                <NavLink to="/login" className="button">Login</NavLink>
                </div>
            }
        }
    }
}

export function withUserAuthorization(Component) {
    return isLoggedIn(Component, 'User')
}