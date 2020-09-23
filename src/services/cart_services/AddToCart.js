import PostData from '../data_requests/PostData'


export default function AddToCart(productId,quantity=1,sizeOption="S"){
    if(localStorage.getItem("cartId") == null){
        PostData("cart/addCart?productId=" + productId + "&quantity=" + quantity + "&optionName=" + sizeOption,null).then((result) => {
            let responseJson = result;    
            localStorage.setItem("cartId",responseJson.id);      
        });
    }
    else {
        let cartId = localStorage.getItem("cartId");
        PostData("cart/addCart?cartId=" + cartId  + "&productId=" + productId + "&quantity=" + quantity + "&optionName=" + sizeOption,null)
    }

}