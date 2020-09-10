import React, { Component } from 'react'

export default class SignIn_View extends Component {
    render() {
        return (
            <form>
            <div className="signin__box">
                 <h2>Sign in</h2>       
                <div className="login__input">
                <label>Username</label>
                <input type="text" placeholder="Enter your username"></input>
                </div>
                <div className="password__input">
                <label>Password</label>
                <input type="text" placeholder="Enter your password"></input>
                </div>
                <div className="email__input">
                <label>E-mail</label>
                <input type="text" placeholder="Enter your email"></input>
                </div>
                <button className="login__button">Sign in</button>
            </div>
            </form>
        )
    }
}
