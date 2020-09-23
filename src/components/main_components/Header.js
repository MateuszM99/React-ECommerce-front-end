import React, { Component } from 'react'
import '../../styles/main_styles/header__style.scss';
import Cart_View from '../cart_components/Cart_View';
import Login_View from '../authentication_components/Login_View';
import SignIn_View from '../authentication_components/SignIn_View';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from 'axios'

export class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isLoginShown : false,
          isSignInShown : false,
          isCartShown: false,
          isLoggedIn : false,
          cartCount : 0,
          categories : [],
          error: null,
          search: ''
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

    addQuery = (key,value,searchParams) => {
      searchParams.set(key,value);
      return searchParams;
    }
  
    removeQuery = (key,searchParams) => {
        searchParams.delete(key);
        return searchParams;
    }

    handleSearchChange = (e) => {
        this.setState({search : e.target.value})
    }

    searchProduct = () => {
      let url = this.props.location;
      let searchParams = new URLSearchParams(url.search);

        if(this.state.search == ""){
            this.setState({search : ''});
            searchParams = this.removeQuery("productName", searchParams);
        } else {
            searchParams = this.addQuery("productName", this.state.search, searchParams);
        }

        this.props.history.push({
            pathname: url.pathname,
            search: searchParams.toString()
        })
    }

 
    componentDidMount(){
        this.handleLoggedIn();
        let cartId = localStorage.getItem("cartId");
        if(cartId == null){
            this.setState({cartCount: 0});
        }
                
          var self = this;
          axios.get("https://localhost:44333/api/cart/getCartCount?cartId=" + cartId)
            .then(function(response){
              self.setState({
                cartCount: response.data
              });
            })
            .catch(function(error){
              self.setState({
                error
              });
            })
   
        fetch("https://localhost:44333/api/products/getCategories")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                categories : result
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )    
        }

    /*componentDidUpdate(){
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
    }*/
    

    render() {
      const {categories} = this.state;
        return (
            <header>   
              <div className="main__header">
                  <div className="header__logo">
                  <img src="https://www.codester.com/static/uploads/items/000/017/17418/preview-xl.jpg" className="shop__logo"></img>
                  </div>
                  <div className="search__input">
                  <input type="text"  placeholder="Search for your product ..." onChange={this.handleSearchChange}></input>      
                  <button onClick={this.searchProduct}>Search</button>          
                  </div>
                  <div className="right__header">
                  <a onClick={this.handleLoginShow} style={{display : this.state.isLoggedIn ? 'none' : 'block'}}>Log in</a>  
                  <Login_View isLoginShown={this.state.isLoginShown} onXClick={this.handleLoginShow}/>
                  <a onClick={this.handleSignInShow} style={{display : this.state.isLoggedIn ? 'none' : 'block'}}>Sign in</a>  
                  <SignIn_View isSignInShown={this.state.isSignInShown} onXClick={this.handleSignInShow}/>
                  <a style={{display : this.state.isLoggedIn ? 'block' : 'none'}}>Some random profile</a>
                  <a onClick={this.logout} style={{display : this.state.isLoggedIn ? 'block' : 'none'}}>Logout</a>   
                  <div className="cart__div">   
                  <img src="/images/basket.png" className="header__cart" onClick={this.handleCartShow}></img>
                  <p className="cart__itemsCount">{this.state.cartCount}</p>
                  </div> 
                  <Cart_View isCartShown={this.state.isCartShown} onCartShow={this.handleCartShow}/>
                  </div>
              </div>
              <div className="main__categories">
                {categories.map(category => (
                  <a key={category.categoryId}>
                    <Link to={`/products/${category.categoryName}`} style={{ textDecoration: 'none' }}>{category.categoryName}</Link>
                  </a>
                ))}
              </div>
            </header>
        )
    }
}

export default (withRouter(Header))
