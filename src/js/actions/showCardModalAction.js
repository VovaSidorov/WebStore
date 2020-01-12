import createCardList from "../Components/CardItemsList";

export default()=>{
    document.getElementById("cart_nav")
        .addEventListener("click",()=>{

            if(
                localStorage.getItem("cart")&&
                Array.isArray(JSON.parse(localStorage.getItem("cart")))
            ){
                const cardItems = JSON.parse(localStorage.getItem("cart"));
                createCardList(cardItems);

            }
        });
}

