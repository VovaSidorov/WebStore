console.log("App was load ...");
import render from './lib/renderHtml';
import _header from './Components/Header/';
import _main from './Components/Main/';

const header = _header();
const main = _main();
const addToCart = new Event("addToCart");

document.addEventListener("addToCart", () => {
    console.log("Detected addToCart");

    document.getElementById("cart_nav").innerHTML = `Cart <span class='badge badge-light'>${JSON.parse(localStorage.getItem("cart")).length}</span>`;

});

render("app", header);
render("app", main);

if(
    !localStorage.getItem("cart") ||
    !Array.isArray(JSON.parse(localStorage.getItem("cart")))
){
    localStorage.setItem("cart",JSON.stringify([]));
}

[...document.getElementsByClassName("nav-item")]
    .map(el => el.addEventListener("click", () => console.log("nav-item")));

[...document.getElementsByClassName("add_to_cart")]
    .map(el => el.addEventListener("click", (e) => {
        console.log("Add");

        let cart = JSON.parse(localStorage.getItem("cart"));

        cart.push({
            id: e.target.dataset.id,
            price: e.target.dataset.price,
            title: e.target.dataset.title,
        });

        localStorage.setItem("cart",JSON.stringify(cart));

        document.dispatchEvent(addToCart);
    }));

