import React, { Component } from 'react'
import '../styles/login__signin__styles.scss';

export default class Login_View extends Component {
    render() {
        return (
            <form>
            <div className="login__box">
                <h2>Log in</h2>             
                <div className="login__input">
                <label>Username</label>
                <input type="text" placeholder="Enter your username"></input>
                </div>
                <div className="password__input">
                <label>Password</label>
                <input type="text" placeholder="Enter your password"></input>
                </div>
                <button className="login__button">Log in</button>              
            </div>
            </form>
        )
    }
}
