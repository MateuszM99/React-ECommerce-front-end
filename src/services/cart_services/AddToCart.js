import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export default function AddToCart(productId,quantity=1,sizeOption="S"){    
    if(localStorage.getItem("cartId") == null){
        axios.post("https://localhost:44333/api/cart/addCart?productId=" + productId + "&quantity=" + quantity + "&optionName=" + sizeOption)
            .then(response => {
                console.log(response.data)
                localStorage.setItem("cartId",response.data.cartId);
                toast.dark(response.data.message)
            })
            .catch(error => {
                toast.warning(error.response.data.message)
            });
    }
    else {
        let cartId = localStorage.getItem("cartId");
        axios.post("https://localhost:44333/api/cart/addCart?cartId=" + cartId  + "&productId=" + productId + "&quantity=" + quantity + "&optionName=" + sizeOption,null)
            .then(response => {
                console.log(response.data)
                toast.dark(response.data.message)
            })
            .catch(error => {              
                toast.warning(error.response.data)
            });
    }
}

