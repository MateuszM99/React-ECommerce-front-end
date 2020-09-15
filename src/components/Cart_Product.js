import React, { Component } from 'react'
import PostData from '../services/PostData'
import '../styles/cart__product.scss'

export class Cart_Product extends Component {

    removeItemFromCart(productId){
        if(localStorage.getItem("cartId") == null){
            return null;    
            }
        else {
            let cartId = localStorage.getItem("cartId");
            PostData("cart/removeCart?cartId=" + cartId  + "&productId=" + productId,null)
        }
    }

    render() {
        return (
            <div className="cart__product">
                <img src="https://cdn.shoplo.com/4326/products/th100/aaak/2060-ekipa-flames-czarna-03.jpg"></img>
                <div className="product__info">
                    <p className="product__name">{this.props.name}</p>
                    <img src="/images/x16bold.png" className="remove__button" onClick={() => this.removeItemFromCart(this.props.id)}></img>
                    <p className="product__size">Size: S</p>
                    <div className="quantity__price">
                        <p className="product__quantity">{this.props.quantity}</p>
                        <p className="product__price">{this.props.price * this.props.quantity} zł</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart_Product
