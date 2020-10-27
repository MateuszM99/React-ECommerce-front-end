import React,{ useEffect, useState } from 'react'
import '../../styles/cm_styles/cm__orders__style.scss'
import Order_tr from './Order_tr'
import axios from 'axios';

function Orders_Management() {

    const [orders,setOrders] = useState([]);
    const [error,setError] = useState(null);

    useEffect(() => {
        axios.get("https://localhost:44333/api/products/getCategories")
        .then(function(response){
            console.log(response.data);
            setOrders(response.data)
        })
        .catch(function(error){
          setError(error)
        })  
    })


    return (
    <div className="cm__orders__container">
    <div className="cm__orders__container__filter">
        <label>Search : </label>
        <input></input>
    </div>
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Status</th>
            <th>Price</th>
            <th>Modified at</th>
            <th>Added at</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {orders.map(order => (
                <Order_tr id={order.id} email={order.email} status={order.status} price={order.price} modifiedAt={order.modifiedAt} addedAt={order.addedAt}/>
            ))}
        </tbody>
    </table>
</div>
    )
}

export default Orders_Management
