import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

async function isLoggedIn(Component) {
    return class IsLoggedIn extends Component {
        constructor(props) {
            super(props)
            this.state = {
                authtoken: ''
            }
        }

        componentDidMount = () => {
            let authtoken = sessionStorage.getItem('authtoken')
           this.setState({authtoken})
        }

        render = () => {
            let userHasAccess = this.state.authtoken !== -1;

            if(userHasAccess) {
                return <Component {...this.props} />
            } else {
                return <Redirect to='/' />
            }
        }
    }
}

export function withUserAuthorization(Component) {
    return isLoggedIn(Component)
}