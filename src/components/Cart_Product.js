import React, { Component } from 'react'

export class Cart_Product extends Component {
    render() {
        return (
            <div className="cart__product">
                <img></img>
                <p>ProductName</p>
                <p>Size : </p>
                <p>Price</p>
                <p>Quantity</p>
            </div>
        )
    }
}

export default Cart_Product
