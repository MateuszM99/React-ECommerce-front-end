import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../../styles/cm_styles/cm__products__style.scss'
import Product_tr from './Product_tr'
import axios from 'axios';

function Products_Management() {

    const [products,setProducts] = useState([]);
    const [error,setError] = useState(null);

    useEffect(() => {
        axios.get("https://localhost:44333/api/products/getProducts")
        .then(function(response){
            console.log(response.data);
            setProducts(response.data)
        })
        .catch(function(error){
          setError(error)
        })  
    })

    return (
        <div className="cm__products__container">
            <div className="cm__products__container__filter">
                <Link to="/manage/products/addProduct">Add product</Link>
                <label>Search : </label>
                <input></input>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>SKU</th>
                    <th>Price</th>
                    <th>Modified at</th>
                    <th>Added at</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {products.map(product => (
                <Product_tr key={product.id} id={product.id} image={product.imageUrl} name={product.name} category={product.categoryName} sku={product.sku} price={product.price}/>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products_Management
