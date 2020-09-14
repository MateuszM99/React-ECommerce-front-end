import React, { Component } from 'react'
import Cart_Product from './Cart_Product'
import '../styles/cart__style.scss'

export class Cart_View extends Component {

    constructor(props) {
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          cartProducts: []
        };
      }

      componentDidMount() {
        let cartId = localStorage.getItem("cartId");
        fetch("https://localhost:44333/api/cart/getCart?cartId=" + cartId)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                cartProducts: result
              });
            },
            // Uwaga: to ważne, żeby obsłużyć błędy tutaj, a
            // nie w bloku catch(), aby nie przetwarzać błędów
            // mających swoje źródło w komponencie.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      componentDidUpdate(){
        let cartId = localStorage.getItem("cartId");
        fetch("https://localhost:44333/api/cart/getCart?cartId=" + cartId)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                cartProducts: result
              });
            },
            // Uwaga: to ważne, żeby obsłużyć błędy tutaj, a
            // nie w bloku catch(), aby nie przetwarzać błędów
            // mających swoje źródło w komponencie.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }


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
                    <Cart_Product id={cartProduct.product.productId} name={cartProduct.product.productName} price={cartProduct.product.productPrice} quantity={cartProduct.quantity}/>
                    </li>
                    ))}
                    </ul>
                    <div className="cart__total">
                    <p>Total price :</p>
                    <p>127.67 zł</p>
                    </div>
                    <div className="cart__order">
                    <a>Continue</a>
                    <button className="order__button">Order</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart_View
