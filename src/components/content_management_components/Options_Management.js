import React,{ useEffect, useState } from 'react'
import '../../styles/cm_styles/cm__options__style.scss'
import Option_tr from './Option_tr'
import axios from 'axios';

function Options_Management() {

    const [options,setOptions] = useState([]);
    const [error,setError] = useState(null);

    useEffect(() => {
        axios.get("https://localhost:44333/api/products/getOptions")
        .then(function(response){
            console.log(response.data);
            setOptions(response.data)
        })
        .catch(function(error){
          setError(error)
        })  
    })

    return (
        <div className="cm__options__container">
            <div className="cm__options__container__filter">
                <button>Add option</button>
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
                 {options.map(option => (
                     <Option_tr key={option.id} id={option.id} name={option.name}/>
                 ))}
                </tbody>
            </table>
        </div>
    )
}

export default Options_Management
