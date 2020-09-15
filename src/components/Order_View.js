import React, { Component } from 'react'
import '../styles/order_styles/order__style.scss'
import Products_List from '../components/order_components/Products_List'
import Delivery_Method from '../components/order_components/Delivery_Method'
import Payment_Method from '../components/order_components/Payment_Method'
import Order_Inputs from '../components/order_components/Order_Inputs'

export class Order_View extends Component {
    render() {
        return (
            <div className="container">
                <div className="header__container">
                    <button className="back__button">Back to shop</button>
                    <button className="order__button">Order</button>
                </div>
                <div className="main__container">
                    <div className="order__details">
                        <h3>1. Order details</h3>    
                        <Order_Inputs/>
                        <h3>2. Delivery method</h3>
                            <div className="delivery__inputs">
                                <Delivery_Method/>
                                <Delivery_Method/>
                            </div>
                        <h3>3. Payment method</h3>
                            <div className="payment__inputs">
                                <Payment_Method/>
                                <Payment_Method/>
                            </div>
                    </div>
                    <Products_List/>
                </div>
            </div>
        )
    }
}

export default Order_View
