import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import withFormManager from './../../hocs/formManager';
import userModel from '../../model/userModel';
import userServices from '../../services/userServices';

class PostCreateForm extends Component {

render = () => {

    return (
        <div className="form-wrapper-create">
            <h2>Create new post</h2>
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="title">
                    Post title
                        <input
                        type="text"
                        name="title"
                        placeholder="write title here"
                        onChange={this.props.handleChange} required/>
                </label>
                <label htmlFor="imgUrl">
                    Image
                        <input
                        type="text"
                        name="imgUrl"
                        placeholder="enter image URL"
                        onChange={this.props.handleChange} required/>
                </label>
                <label htmlFor="description">
                    Post description
                        <textarea
                        type="text"
                        name="description"
                        placeholder="write you content here"
                        onChange={this.props.handleChange} required/>
                </label>
                <button className="button" type="submit">Create</button>
            </form>
        </div>
    )
}
}

export default withFormManager(PostCreateForm, userModel, userServices.login)