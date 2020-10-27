import React from 'react'
import {Link} from 'react-router-dom'

function Category_tr(props) {
    return (
        <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>
            <div className="cm__products__container__actions">
                <Link className="cm__products__container__product__button">Edit</Link> 
                <button className="cm__products__container__product__button">Delete</button>
            </div>
        </td>
    </tr>
    )
}

export default Category_tr
