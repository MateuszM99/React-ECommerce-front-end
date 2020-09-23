import PostData from '../data_requests/PostData'

export default function RemoveItemFromCart(productId){
    if(localStorage.getItem("cartId") == null){
        return null;    
        }
    else {
        let cartId = localStorage.getItem("cartId");
        PostData("cart/removeCart?cartId=" + cartId  + "&productId=" + productId,null)
    }
}