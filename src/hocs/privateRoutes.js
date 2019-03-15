import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import requester from '../infrastructure/requester';
import userServices from '../services/userServices';

async function withAuthorization(Component, role) {
    return class withAuthorization extends Component {
        constructor(props) {
            super(props)
            this.state = {
                Roles: []
            }
        }

        componentDidMount = () => {
            let roles = sessionStorage.getItem('userRoles').split(',')
           this.setState({roles})
        }

        render = () => {
            let userHasAccess = this.state.roles.indexOf(role) !== -1;

            if(userHasAccess) {
                return <Component {...this.props} />
            } else {
                return <Redirect to='/' />
            }
        }
    }
}

export function withAdminAuthorization(Component) {
    return withAuthorization(Component, 'Admin')
}