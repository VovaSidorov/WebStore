export default ()=>{
    if(
        !localStorage.getItem("cart") ||
        !Array.isArray(JSON.parse(localStorage.getItem("cart")))
    ){
        localStorage.setItem("cart",JSON.stringify([]));
    }
}