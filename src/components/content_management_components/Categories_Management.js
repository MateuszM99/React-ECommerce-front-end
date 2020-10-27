import React,{ useEffect, useState } from 'react'
import '../../styles/cm_styles/cm__categories__style.scss'
import Category_tr from './Category_tr'
import axios from 'axios';

function Categories_Management() {

    const [categories,setCategories] = useState([]);
    const [error,setError] = useState(null);

    useEffect(() => {
        axios.get("https://localhost:44333/api/products/getCategories")
        .then(function(response){
            console.log(response.data);
            setCategories(response.data)
        })
        .catch(function(error){
          setError(error)
        })  
    })

    return (
        <div className="cm__categories__container">
        <div className="cm__categories__container__filter">
            <button>Add category</button>
            <label>Search : </label>
            <input></input>
        </div>
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {categories.map(category => (
             <Category_tr id={category.id} name={category.name}/>
            ))}
            </tbody>
        </table>
    </div>
    )
}

export default Categories_Management
