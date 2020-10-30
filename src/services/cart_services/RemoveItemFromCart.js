import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export default function RemoveItemFromCart(productId){
    if(localStorage.getItem("cartData") == null){
        toast.dark('Your cart is empty')    
        }
    else {
        let cartData = JSON.parse(localStorage.getItem("cartData"));
        let cartId = cartData.cartId;
        axios.post("https://localhost:44333/api/cart/removeCart?cartId=" + cartId  + "&productId=" + productId,null)
            .then(response =>{
                localStorage.setItem("cartData",JSON.stringify(response.data));
                toast.dark(response.data.message);
            })
            .catch(error => {
                toast.warning(error.response.data)
            })
    }
}