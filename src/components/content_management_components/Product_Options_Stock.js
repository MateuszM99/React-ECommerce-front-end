import React,{ useEffect, useState } from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios';




function Product_Options_Stock(props) {

    const params = useParams();
    const id = params.id;

    const [product,setProduct] = useState(null);
    const [availableOptions,setAvailableOptions] = useState([])
    const [error,setError] = useState(null);
    const [num,setNum] = useState(0);
    const [selectedOption,setSelectedOption] = useState(null);

    useEffect(() => {
        axios.get("https://localhost:44333/api/products/getProduct?productId=" + id)
        .then(function(response){
            setProduct(response.data)
        })
        .catch(function(error){
          setError(error)
        })  
        
        axios.get("https://localhost:44333/api/products/getOptions")
        .then(function(response){
            setAvailableOptions(response.data)
        })
        .catch(function(error){
          setError(error)
        })
    })

    function handleOptionChange(e){
        setSelectedOption(e.target.value)
    }

    function addOption(optionId){
        alert(optionId)
        axios.post("https://localhost:44333/api/products/addOptionToProduct?productId=" + id + "&optionId" + optionId);
    }

    function addToStock(){
        console.log(num);
    }

    function handleNumChange(e){
        setNum(e.target.value)
    }

    if(product == null || error)
    return (<div>Loading</div>)
    else
    return (
        <div className="cm__products__option__stock__container">
            <div className="cm__products__option__stock__container__header">
            <h2>Set product options/stock</h2>
            <select onChange={handleOptionChange}>
                <option value="" disabled selected>Select an option</option>
                {availableOptions.map(option => (
                    <option value={option.id}>{option.name}</option>
                ))}
            </select>
            <button onClick={addOption({selectedOption})}>Add Option</button>
            </div>
            <div className="cm__products__option__stock__container__product">
            <h2>{product.name}</h2>
            <img src="https://cdn.shoplo.com/3871/products/th640/aaau/1048-tshirt-pima-marka-patchouli_l.jpg"></img>
            <h3>Options</h3>
            </div>
            <div className="cm__products__option__stock__container__options">
                <ul>
                    {product.options ?
                    product.options.map(option => (
                        <li key={option.id}>
                            <p>{option.name}</p>
                            <div>
                                <input type="text" onChange={handleNumChange}></input>
                                <button onClick={addToStock}>Add to stock</button>
                                <p>Current stock</p>
                                <p className="cm__products__option__stock__container__options__boxtext">{option.stock}</p>
                            </div>
                        </li>
                    ))
                    : null }
                </ul>
            </div>
        </div>
    )
}

export default Product_Options_Stock
