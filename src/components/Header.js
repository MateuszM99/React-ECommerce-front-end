import React, { Component } from '../../node_modules/react'
import '../styles/header__style.scss';
import Cart_View from './Cart_View';
import Login_View from './Login_View';
import SignIn_View from './SignIn_View';


export class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isLoginShown : false,
          isSignInShown : false,
          isCartShown: false,
          isLoggedIn : false,
          cartCount : 0,
          error: null
        };

        this.handleCartShow = this.handleCartShow.bind(this);
        this.handleLoggedIn = this.handleLoggedIn.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleCartShow = () => {
        this.setState({isCartShown : !this.state.isCartShown});
    }

    handleLoginShow = () => {
        this.setState({isLoginShown : !this.state.isLoginShown});
    }

    handleSignInShow = () => {
        this.setState({isSignInShown : !this.state.isSignInShown});
    }

    handleLoggedIn = () => {
        console.log(localStorage.getItem("userData"))
        if(localStorage.getItem("userData"))
        this.setState({isLoggedIn : true})
    }

    logout = () => {
        localStorage.setItem("userData",'')
        localStorage.clear();
        this.setState({isLoggedIn: false})
    }

    componentDidMount(){
        let cartId = localStorage.getItem("cartId");
        if(cartId == null){
            this.setState({cartCount: 0});
        }
        fetch("https://localhost:44333/api/cart/getCartCount?cartId=" + cartId)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                cartCount: result
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
    }

    componentDidUpdate(){
        let cartId = localStorage.getItem("cartId");
        if(cartId == null){
            this.setState({cartCount: 0});
        }
        fetch("https://localhost:44333/api/cart/getCartCount?cartId=" + cartId)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                cartCount: result
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
    }
    

    render() {
        return (
            <header>   
              <div className="main__header">
                  <div className="header__logo">
                  <img src="https://www.codester.com/static/uploads/items/000/017/17418/preview-xl.jpg" className="shop__logo"></img>
                  </div>
                  <div className="search__input">
                  <input type="text"  placeholder="Search for your product ..."></input>      
                  <button>Search</button>          
                  </div>
                  <div className="right__header">
                  <a onClick={this.handleLoginShow} style={{display : this.state.isLoggedIn ? 'none' : 'block'}}>Log in</a>  
                  <Login_View isLoginShown={this.state.isLoginShown} onXClick={this.handleLoginShow}/>
                  <a onClick={this.handleSignInShow} style={{display : this.state.isLoggedIn ? 'none' : 'block'}}>Sign in</a>  
                  <SignIn_View isSignInShown={this.state.isSignInShown} onXClick={this.handleSignInShow}/>
                  <a onClick={this.logout} style={{display : this.state.isLoggedIn ? 'block' : 'none'}}>Logout</a>   
                  <div className="cart__div">   
                  <img src="/images/basket.png" className="header__cart" onClick={this.handleCartShow}></img>
                  <p className="cart__itemsCount">{this.state.cartCount}</p>
                  </div> 
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
            </header>
        )
    }
}

export default Header
