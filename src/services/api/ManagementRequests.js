import axios from 'axios'
import FormData from 'form-data'

const baseUrl = 'https://localhost:44333/api';

export function getAvailableCategoriesRequest(){
    return axios.get(`${baseUrl}/products/getCategories`);
}

export function addProductRequest(values){
    console.log(values);
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    let formData = new FormData();
    formData.append('productImage',values.image);
    formData.append('name',values.name);
    formData.append('sku',values.sku);
    formData.append('price',values.price);
    formData.append('categoryId',values.category);
    return axios.post(`${baseUrl}/products/addProduct`,formData,config);
}