import React, { Component } from 'react'

export class Products_List extends Component {
    render() {
        return (
            <div className="products__list">
                    <div className="products__list__header">
                    <h4>3 Items</h4>
                    </div>
                    <div className="products__list__product">
                        <img src="https://cdn.shoplo.com/4326/products/th50/aaa9/1926-ekipa-waz-05biala.jpg"></img>
                        <span>
                            <p className="products__list__product__name">T-Shirt EKIPA Snake Bialy dsdsdfsafasfsasasasasasasasasasasasasasasasasadsdadasda</p>
                            <p className="products__list__product__size">Size: S</p>
                        </span>
                        <p className="products__list__product__quantity">1</p>
                        <p className="products__list__product__price">64.99 $</p>
                    </div>
                    <div className="products__list__costs">
                        <span>
                            <p className="products__list__costs__label">Sum:</p>
                            <p className="products__list__costs__price">64.99 $</p>
                        </span>
                        <span>
                            <p className="products__list__costs__label">Delivery:</p>
                            <p className="products__list__costs__price">12.99 $</p>
                        </span>
                    </div>
                    <div className="products__list__total">
                        <p>Total:</p>
                        <p>74.99$</p>
                    </div>
                    <div className="order__comment">
                        <p>Add comment to the order:</p>
                        <textarea></textarea>
                    </div>
            </div>           
        )
    }
}

export default Products_List
