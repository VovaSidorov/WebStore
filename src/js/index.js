console.log("App was load ...");
import render from './lib/renderHtml';
import _header from './Components/Header/';
import _main from './Components/Main/';
import modal from './Components/Modal';
import createCardElement from './Components/Card'

import addToCartAction from "./actions/addToCartAction";
import showCardModalAction from "./actions/showCardModalAction";
import clearModalAction from "./actions/clearModalAction";
import initCardAction from "./actions/initCardAction";
import fetchProducts from './actions/fetchProducts';

import pagination from './Components/Pagination';

const header = _header();
const main = _main();

const addToCartEvent = new Event("addToCart");

document.addEventListener("addToCart", () => {
    console.log("Detected addToCart");

    document.getElementById("cart_nav").innerHTML = `Cart <span class='badge badge-light'>${JSON.parse(localStorage.getItem("cart")).length}</span>`;

});

render("app", header);
render("app", main);
render("app", modal);

initCardAction();
showCardModalAction();
clearModalAction();

const urlSearch = location.search;

fetchProducts(urlSearch, 6)
    .then(data =>{
        const {products, currentPage} = data;
        console.log(data);
        document.getElementById("catalog").innerText = "";
        products.map(el => render("catalog", createCardElement(el)));
        addToCartAction(addToCartEvent);
        render("pagination", pagination(data));
    })
    .catch(err => console.log(err));










