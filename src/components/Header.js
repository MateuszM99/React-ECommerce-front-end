import React, { Component } from '../../node_modules/react'
import '../styles/header__style.scss';
import Cart_View from './Cart_View';
import Login_View from './Login_View';
import SignIn_View from './SignIn_View';


export class Header extends Component {

    constructor(props) {
        super(props);
     
        this.handleCartShow = this.handleCartShow.bind(this);

        this.state = {
          isCartShown: false,
        };
      }

      handleCartShow = () => {
          this.setState({isCartShown : !this.state.isCartShown});
      }

    render() {
        return (
            <div>
            <div className="main__header">
                <img src="/images/shop-logo-white.png" className="shop__logo"></img>
                <div className="search__input">
                <input type="text"  placeholder="Search for your product ..."></input>                
                </div>
                <div className="right__header">
                <a>Log in</a>  
                <Login_View/>
                <a>Sign in</a>  
                <SignIn_View/>       
                <img src="/images/shopping-cart.png" className="header__cart" onClick={this.handleCartShow}></img>
                <Cart_View isCartShown={this.state.isCartShown} onCartShow={this.handleCartShow}/>
                </div>
            </div>
            <div className="main__categories">
                <a>New products</a>
                <a>Clothing</a>
                <a>Accessories</a>
                <a>Shoes</a>
                <a>Activewear</a>
                <a>Brands</a>
            </div>
            </div>
        )
    }
}

export default Header
