import React, { Component } from 'react'
import Cart_Product from './Cart_Product'
import '../styles/cart__style.scss'

export class Cart_View extends Component {

    render() {
        return (
            <div className="cart__view" style={{display : this.props.isCartShown ? 'block' : 'none'}}>
                <h3>Cart</h3>
                <Cart_Product/>
                <div className="cart__order">
                <p>Total price</p>
                <a>Continue</a>
                <button>Order</button>
                </div>
                <img src="/images/close.png" onClick={this.props.onCartShow}></img>
            </div>
        )
    }
}

export default Cart_View
