import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import requester from '../../infrastructure/requester';

export default class Logout extends Component {
    logout = () => {
        requester.post('user', '_logout', 'kinvey')
            .then(res => {
                sessionStorage.removeItem('authtoken')
                sessionStorage.removeItem('username')
                sessionStorage.removeItem('userRoles')
            })
    }

    render = () => {
        this.logout()
        return < Redirect to='/login' />
    }
}