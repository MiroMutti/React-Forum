import React, { Component } from 'react';

export default class Home extends Component {
    render = () => {
        return(
            <div className='greeting'>
            <p className='greeting-title'>Welcome to Mercedes-Benz forum</p>
            <p className='greeting-description'>Enjoy the world of Mercedes-Benz.</p>
            </div>
        )
    }
}