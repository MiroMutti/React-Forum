import React, { Component } from 'react';
import PostsList from '../post/PostsList';
import '../../styles/catalogue.scss'

export default class Catalog extends Component {
    render = () => {
        return(
            <PostsList />
        )
    }
}