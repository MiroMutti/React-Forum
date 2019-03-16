import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/catalogue.scss';


function pluralize(value) {
    if (value !== 1) return 's';
    else return '';
}

export default class Post extends Component {

    createdBefore = () => {
        let dateIsoFormat = this.props._kmd.ect;
        let diff = new Date() - (new Date(dateIsoFormat));
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
                    <img src={this.props.imageUrl} alt='thumbnail' />
                </div>
                <div className='post-content'>
                    <p className='post-title'>{this.props.title}</p>
                    <div className='details'>
                        Posted before {this.createdBefore()}
                    </div>
                    <div className='action-bar'>
                        <ul>
                            <li><Link to='/' className="button">Details</Link></li>
                            <li><Link to='/' className="button">Delete</Link></li>
                        </ul>
                    </div>
                </div>
            </article>
        )
    }

}