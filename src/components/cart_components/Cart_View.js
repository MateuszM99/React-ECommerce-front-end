import React, { Component } from 'react'
import Cart_Product from '../cart_components/Cart_Product'
import '../../styles/cart_styles/cart__style.scss'
import {Link} from  "react-router-dom"

export class Cart_View extends Component {

    constructor(props) {
        super(props);

        this.getCartPrice = this.getCartPrice.bind(this);

        this.state = {
          error: null,
          cartProducts: []
        };
      }

      getCartPrice = () => {
        var totalCartPrice = 0;
        this.state.cartProducts.forEach(cartProduct => {
            totalCartPrice += cartProduct.product.productPrice * cartProduct.quantity;
        });

        return totalCartPrice;
      }

      componentDidMount() {
        let cartId = localStorage.getItem("cartId");
        fetch("https://localhost:44333/api/cart/getCart?cartId=" + cartId)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                cartProducts: result
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
      }

     /* componentDidUpdate(){
        let cartId = localStorage.getItem("cartId");
        fetch("https://localhost:44333/api/cart/getCart?cartId=" + cartId)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                cartProducts: result
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
        const { error, isLoaded, cartProducts } = this.state;
        return (
            <div className="popup" style={{display : this.props.isCartShown ? 'block' : 'none',opacity : this.props.isCartShown ? '1' : '0'}}>
                <div className="cart__view">
                    <div className="cart__header">
                    <p>Cart</p>
                    <img src="/images/cross16.png" onClick={this.props.onCartShow} className="close__button"></img>
                    </div>
                    <ul className="cart__products">
                    {cartProducts.map(cartProduct => (
                    <li key={cartProduct.product.productId}>
                    <Cart_Product id={cartProduct.product.productId} name={cartProduct.product.productName} price={cartProduct.product.productPrice} quantity={cartProduct.quantity} image={cartProduct.product.imageUrl} size={cartProduct.option.optionName}/>
                    </li>
                    ))}
                    </ul>
                    <div className="cart__total">
                    <p>Total price :</p>
                    <p>{this.getCartPrice()}</p>
                    </div>
                    <div className="cart__order">
                    <a onClick={this.props.onCartShow}>Continue</a>
                    <Link to="/order" style={{ color: 'inherit', textDecoration: 'none',borderStyle: 'none'}}><button className="order__button">Order</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart_View
