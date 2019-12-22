export default (event) => {
    [...document.getElementsByClassName("add_to_cart")]
        .map(el => el.addEventListener("click", (e) => {
            console.log("Add");

            let cart = JSON.parse(localStorage.getItem("cart"));

            cart.push({
                id: e.target.dataset.id,
                price: e.target.dataset.price,
                title: e.target.dataset.title,
            });

            localStorage.setItem("cart", JSON.stringify(cart));

            document.dispatchEvent(event);
        }));
}
