import React, { Component } from 'react'
import PostData from '../services/PostData'

export default class SignIn_View extends Component {

    constructor(){
        super();

        this.state = {
            username : null,
            email : null,
            password : null,      
            usernameError: "Username required",
            emailError : "E-mail required",
            passwordError : "Password required"  
        }
        this.onChange = this.onChange.bind(this);
        this.register = this.register.bind(this);
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    validate(){
        let usernameError = "";
        let emailError = "";
        let passwordError = "";
        let result = true;

        if(this.state.username.length < 6){
        usernameError = "Username has to be at least 6 characters long";
        this.setState({usernameError});
        result = false;
        }

        if(!this.state.email.includes('@')){
            emailError = "Email is invalid";
            this.setState({emailError});
            result = false;
        }

        if(this.state.password.length < 9){
            passwordError = "Password has to be at least 9 characters long";
            this.setState({passwordError});
            result = false;
        }

        return result;
    }
    


    register = (e) => {
        if(!this.validate()){
        e.preventDefault();
        return
        }
        PostData('register',this.state).then((result) => {
            let responseJson = result;
            console.log(responseJson);
        }); 
    }

    render() {
        return (
            <div className="popup" style={{display : this.props.isSignInShown ? 'block' : 'none'}}>    
            <form onSubmit={this.register}  >  
            <div className="signin__box">
                 <p>Sign in</p>       
                <div className="login__input">
                <label>Username</label>
                <input type="text" placeholder="Enter your username" name="username" onChange={this.onChange}></input>
                {!this.state.username ? (<div className="validation">{this.state.usernameError}</div>) : null}
                </div>
                <div className="email__input">
                <label>E-mail</label>
                <input type="text" placeholder="Enter your email" name="email" onChange={this.onChange}></input>
                {!this.state.email ? (<div className="validation">{this.state.emailError}</div>) : null}
                </div>
                <div className="password__input">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" name="password" onChange={this.onChange}></input>
                {!this.state.password ? (<div className="validation">{this.state.passwordError}</div>) : null}
                </div>
                <button className="login__button" type="submit">Sign in</button>
                <img src="/images/quit.png" className="quit__button" onClick={this.props.onXClick}></img>
            </div>
            </form>
            </div>
        )
    }
}
