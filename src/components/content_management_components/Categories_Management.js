import React,{ useEffect, useState } from 'react'
import '../../styles/cm_styles/cm__categories__style.scss'
import Category_tr from './Category_tr'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Categories_Management() {

    const [categories,setCategories] = useState([]);
    const [error,setError] = useState(null);
    const [searchString,setSearchString] = useState("");

    const getCategoriesData = () => {
        axios.get("https://localhost:44333/api/products/getCategories")
        .then(function(response){
            console.log(response.data);
            setCategories(response.data)
        })
        .catch(function(error){
          setError(error)
        })  
    }

    useEffect(() => {
        getCategoriesData(); 
    },[])

    const deleteCategory = (categoryId) => {
        axios.post("https://localhost:44333/api/products/")
        .then(getCategoriesData);
    }

    const handleSearchChange = (e) => {
        setSearchString(e.target.value)
    }

    return (
        <div className="cm__categories__container">
        <div className="cm__categories__container__filter">
            <Link to="/manage/categories/addCategory">Add category</Link>
            <label>Search : </label>
            <input onChange={handleSearchChange}></input>
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
            {categories
            .filter(category => category.name.toLowerCase().includes(searchString.toLowerCase()) || category.id.toString().includes(searchString))
            .map(category => (
             <Category_tr id={category.id} name={category.name} delete={deleteCategory}/>
            ))}
            </tbody>
        </table>
    </div>
    )
}

export default Categories_Management
