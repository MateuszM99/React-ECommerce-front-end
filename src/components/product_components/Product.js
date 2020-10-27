import React, { Component } from 'react'
import '../../styles/product_styles/product__style.scss'
import PostData from '../../services/data_requests/PostData'
import AddToCart from '../../services/cart_services/AddToCart'
import {Link} from  "react-router-dom"

export class Product extends Component{

    render(){
        return (
            <div className="product__card">
                <img src={this.props.image} alt=""></img>
                <div className="product__details">
                <Link to={`/products/${this.props.category}/${this.props.id}`}>{this.props.title}</Link>
                <p>{this.props.price} zł</p>
                <button className="add__toCart" onClick={() => AddToCart(this.props.id)}>Add to cart</button>
                </div>
            </div>
        )
    }
}

export default Product
