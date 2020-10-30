import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export default function AddToCart(productId,quantity=1,sizeOption="S"){    
    if(localStorage.getItem("cartData") == null){
        axios.post("https://localhost:44333/api/cart/addCart?productId=" + productId + "&quantity=" + quantity + "&optionName=" + sizeOption)
            .then(response => {
                console.log(response.data)
                localStorage.setItem("cartData",JSON.stringify(response.data));
                toast.dark(response.data.message)
            })
            .catch(error => {
                toast.warning(error.response.data.message)
            });
    }
    else {
        let cartData = JSON.parse(localStorage.getItem("cartData"));
        let cartId = cartData.cartId
        axios.post("https://localhost:44333/api/cart/addCart?cartId=" + cartId  + "&productId=" + productId + "&quantity=" + quantity + "&optionName=" + sizeOption,null)
            .then(response => {
                localStorage.setItem("cartData",JSON.stringify(response.data));
                toast.dark(response.data.message)
            })
            .catch(error => {              
                toast.warning(error.response.data)
            });
    }
}

