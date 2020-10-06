import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export default function AddToCart(productId,quantity=1,sizeOption="S"){
    if(localStorage.getItem("cartId") == null){
        axios.post("https://localhost:44333/api/authenticate/cart/addCart?productId=" + productId + "&quantity=" + quantity + "&optionName=" + sizeOption,null)
            .then(response => {
                localStorage.setItem("cartId",response.data.id);
                toast.dark(response.data.successMessage)
            })
            .catch(error => {
                toast.warning(error.response.data.errorMessage)
            });
    }
    else {
        let cartId = localStorage.getItem("cartId");
        axios.post("https://localhost:44333/api/authenticate/cart/addCart?cartId=" + cartId  + "&productId=" + productId + "&quantity=" + quantity + "&optionName=" + sizeOption,null)
            .then(response => {
                toast.dark(response.data.successMessage)
            })
            .catch(error => {
                toast.warning(error.response.data.errorMessage)
            });
    }
}

