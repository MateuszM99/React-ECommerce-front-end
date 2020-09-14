import React, { Component } from 'react'
import '../styles/product__style.scss'
import PostData from '../services/PostData'

export class Product extends Component{

    addToCart(productId){
        if(localStorage.getItem("cartId") == null){
            PostData("cart/addCart?productId=" + productId,null).then((result) => {
                let responseJson = result;    
                localStorage.setItem("cartId",responseJson.id);      
            });
        }
        else {
            let cartId = localStorage.getItem("cartId");
            PostData("cart/addCart?cartId=" + cartId  + "&productId=" + productId,null)
        }

      }

    render(){
        return (
            <div className="product__card">
                <img src={this.props.image} alt=""></img>
                <div className="product__details">
                <a>{this.props.title}</a>
                <p>{this.props.price} zł</p>
                <button className="add__toCart" onClick={() => this.addToCart(this.props.id)}>Add to cart</button>
                </div>
            </div>
        )
    }
}

export default Product
