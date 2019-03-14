import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function pluralize(value) {
    if (value !== 1) return 's';
    else return '';
}

export default class Post extends Component {

    createdBefore = () => {
        let dateIsoFormat = this.props._kmd.ect;
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
    }

    render = () => {
        return (
            <article className='post'>
                <div className='thumbnail'>
                    <img scr={this.props.imageUrl} alt='thumbnail' />
                </div>
                <div className='post-content'>
                    <p>{this.props.title}</p>
                    <div className='details'>
                        {this.createdBefore()}
                    </div>
                    <div className='action-bar'>
                        <ul>
                            <li><Link to='/'>Details</Link></li>
                            <li><Link to='/'>Edit</Link></li>
                            <li><Link to='/'>Delete</Link></li>
                        </ul>
                    </div>
                </div>
            </article>
        )
    }

}