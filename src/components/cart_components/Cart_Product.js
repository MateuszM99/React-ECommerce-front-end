import React, { Component } from 'react'
import PostData from '../../services/data_requests/PostData'
import '../../styles/cart_styles/cart__product.scss'
import RemoveItemFromCart from '../../services/cart_services/RemoveItemFromCart'

export class Cart_Product extends Component {

    render() {
        return (
            <div className="cart__product">
                <img src={this.props.image}></img>
                <div className="product__info">
                    <p className="product__name">{this.props.name}</p>
                    <img src="/images/x16bold.png" className="remove__button" onClick={() => RemoveItemFromCart(this.props.id)}></img>
                    <p className="product__size">Size: {this.props.size}</p>
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
