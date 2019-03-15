import React, { Component } from 'react';
import requester from '../../infrastructure/requester';
import Post from './Post';

export default class PostsList extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }

    getPosts = () => requester.get('appdata', 'posts', 'kinvey')
        .then(res => {
            this.setState(prevState => {
               return { posts: res }
            })
        })

    componentDidMount = () => this.getPosts()

    render = () => (
        <div className='posts-list'>
            {this.state.posts.map(p => <Post key={p._id} {...p} />)}
        </div>

    )
}