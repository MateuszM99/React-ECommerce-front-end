import React, { Component } from 'react'
import '../styles/product__style.scss'

export class Product extends Component {
    render() {
        return (
            <div className="product__card">
                <img src="https://cdn.shoplo.com/4326/products/th480/aaaa/1146-biurko-ekipa-01-1.jpg" alt=""></img>
                <p>ProductName</p>
                <p>ProductPrice</p>
                <button>Add to cart</button>
            </div>
        )
    }
}

export default Product
