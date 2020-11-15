import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const baseUrl = 'https://localhost:44333/api';

export function addToNullCartRequest(productId,quantity=1,sizeOption="S"){
    return axios.post(`${baseUrl}/cart/addCart?productId=` + productId + '&quantity=' + quantity + '&optionName=' + sizeOption);
}

export function addToCartRequest(cartId,productId,quantity=1,sizeOption="S"){
    return axios.post(`${baseUrl}/cart/addCart?cartId=` + cartId  + '&productId=' + productId + '&quantity=' + quantity + '&optionName=' + sizeOption,null);
}

export function removeItemFromCartRequest(cartId,productId){
    return axios.post(`${baseUrl}/cart/removeCart?cartId=` + cartId  + "&productId=" + productId,null);
}

export function getCartDataRequest(cartId){
    return axios.get(`${baseUrl}/cart/getCart?cartId=` + cartId);
}






