import React, { Component, Fragment } from 'react';
import { NavLink , Link } from 'react-router-dom';
import '../../styles/header.scss';
import observer from '../../infrastructure/observer';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {username: null}

        observer.subscribe(observer.events.loginUser, this.userLoggedIn)
    }

    userLoggedIn = username => 
    this.setState({ username })

    render = () => {
        return(
            <header className="site-header">
                <p className="site-title">Mercedes Benz</p>
                <nav className="navigation">
                    <ul>
                        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
                        <li><NavLink to="/catalogue" activeClassName="active">Catalogue</NavLink></li>
                        {this.state.username ?
                            (
                                <Fragment>
                                    <li><NavLink to="/articles" activeClassName="active">My Articles</NavLink></li>
                                    <li><NavLink to="/cart" activeClassName="active">Favourite</NavLink></li>
                                    <li><Link to="/">Logout</Link></li>
                                </Fragment>
                            )
                            : <li><NavLink to="/login">Log in</NavLink>
                            </li>
                        }
                    </ul>
                    {
                        this.state.username
                            ? <span className="user-message">Hello, {this.state.username}</span>
                            : null
                    }
                </nav>
            </header>
        )
    }
}