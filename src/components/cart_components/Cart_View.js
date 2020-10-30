import React, { Component } from 'react'
import Cart_Product from '../cart_components/Cart_Product'
import '../../styles/cart_styles/cart__style.scss'
import {Link} from  "react-router-dom"
import axios from 'axios';

export class Cart_View extends Component {

    constructor(props) {
        super(props);

        this.state = {
          error: null,
          cartProducts: [],
          isLoggedIn : false
        };
      }


      getCart = () => {
        let cartData = JSON.parse(localStorage.getItem("cartData"));
        if(cartData != null){
          let cartId = cartData.cartId;
          var self = this;
          axios.get("https://localhost:44333/api/cart/getCart?cartId=" + cartId)
            .then(function(response){
              self.setState({
                cartProducts: response.data
              });
            })
            .catch(function(error){
              self.setState({
                error
              });
            })
          }
      }

      componentDidMount() {
        this.getCart();
      }

      componentDidUpdate(){
        
      }

    render() {
        const { error, isLoaded, cartProducts,isLoggedIn } = this.state;
        return (
            <div className="popup" style={{display : this.props.isCartShown ? 'block' : 'none',opacity : this.props.isCartShown ? '1' : '0'}}>
                <div className="cart__view">
                    <div className="cart__header">
                    <p>Cart</p>
                    <img src="/images/cross16.png" onClick={this.props.onCartShow} className="close__button"></img>
                    </div>
                    <ul className="cart__products">
                    {cartProducts.map(cartProduct => (
                    <li key={cartProduct.product.id}>
                    <Cart_Product id={cartProduct.product.id} name={cartProduct.product.name} price={cartProduct.product.price} quantity={cartProduct.quantity} image={cartProduct.product.imageUrl} size={cartProduct.option.name}/>
                    </li>
                    ))}
                    </ul>
                    <div className="cart__total">
                    <p>Total price :</p>
                    <p>{JSON.parse(localStorage.getItem("cartData")).cartPrice} PLN</p>
                    </div>
                    <div className="cart__order">
                    <a onClick={this.props.onCartShow}>Continue</a>
                    { isLoggedIn ? 
                    <Link to="/order" className="order__button">Order</Link> :
                    <Link to="/checkLogin" className="order__button">Order</Link>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart_View
