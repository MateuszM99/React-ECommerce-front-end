import React from 'react'
import {Link} from 'react-router-dom'

function Product_tr(props) {   
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.image}</td>
            <td>{props.name}</td>
            <td>{props.category}</td>
            <td>{props.sku}</td>
            <td>{props.price}</td>
            <td>{props.modifiedAt}</td>
            <td>{props.addedAt}</td>
            <td>
                <div className="cm__products__container__actions">
                    <Link className="cm__products__container__product__button">Edit</Link> 
                    <button className="cm__products__container__product__button">Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default Product_tr
