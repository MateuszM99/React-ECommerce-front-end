import React, { Component } from 'react'
import '../styles/login__signin__styles.scss';
import PostData from '../services/PostData'

export default class Login_View extends Component {

    constructor(){
        super();
        this.state = {
            username : null,
            password : null
        };
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this)
    }

    login = () => {
        if(this.state.username && this.state.password){
        PostData('login',this.state).then((result) => {
            let responseJson = result;    
            sessionStorage.setItem('userData',responseJson);      
            console.log(responseJson);
        });
        this.props.onXClick();
    }

    }


    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    render() {
        return (
            <div className="popup" style={{display : this.props.isLoginShown ? 'block' : 'none'}}>
            <form onSubmit={this.login}>
            <div className="login__box" >
                <p>Log in</p>             
                <div className="login__input">
                <label>Username</label>
                <input type="text" placeholder="Enter your username" name="username" onChange={this.onChange}></input>
                </div>
                <div className="password__input">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" name="password" onChange={this.onChange}></input>
                </div>
                <button className="login__button" type="submit">Log in</button> 
                <img src="/images/quit.png" className="quit__button" onClick={this.props.onXClick}></img>             
            </div>
            </form>
            </div>
        )
    }
}
