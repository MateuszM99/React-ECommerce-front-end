import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export default function RemoveItemFromCart(productId){
    if(localStorage.getItem("cartId") == null){
        toast.dark('Your cart is empty')    
        }
    else {
        let cartId = localStorage.getItem("cartId");
        axios.post("https://localhost:44333/api/authenticate/cart/removeCart?cartId=" + cartId  + "&productId=" + productId,null)
            .then(response =>{
                toast.dark(response.data.successMessage);
            })
            .catch(error => {
                toast.warning(error.response.data.errorMessage)
            })
    }
}