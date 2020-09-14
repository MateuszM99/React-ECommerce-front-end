import React, { Component } from 'react'
import '../styles/cart__product.scss'

export class Cart_Product extends Component {

    

    render() {
        return (
            <div className="cart__product">
                <img src="https://cdn.shoplo.com/4326/products/th100/aaak/2060-ekipa-flames-czarna-03.jpg"></img>
                <div className="product__info">
                    <p className="product__name">{this.props.name}</p>
                    <img src="/images/x16bold.png" className="remove__button"></img>
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
