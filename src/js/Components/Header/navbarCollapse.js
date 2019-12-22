import getHtmlObject from "../../lib/FactoryHtml";

import './style.scss';

const a = getHtmlObject('a');
const ul = getHtmlObject('ul');
const li = getHtmlObject('li');
const div = getHtmlObject('div');

const navLinks = [
    {name: "Home", attr: [{name: "href", value: "/"}]},
    {name: "Catalog", attr: [{name: "href", value: "/"}]},
    {name: "Cart", attr: [
            {name: "href", value: "/"},
            {name: "id", value: "cart_nav"},
            {name: "class", value: "nav-link d-flex align-items-center"},
            {name: "data-toggle", value: "modal"},
            {name: "data-target", value: "#modalCart"},
        ]},
    {name: "Contact", attr: [{name: "href", value: "/"}]},
];

const navItems = navLinks.map((el) =>
    li.createHtmlElement(
        "nav-item",
        null,
        [
            a.createHtmlElement(
                "nav-link",
                el.attr,
                el.name == "Cart"?createCartText(el.name):el.name
            )
        ]
    )
);

const navbarNav = ul.createHtmlElement("navbar-nav",null,navItems);
const navbarCollapse = div.createHtmlElement(
    "collapse navbar-collapse justify-content-end",
    [{name:"id", value:"navbarSupportedContent"}],
    [navbarNav]
);

export default navbarCollapse;

function createCartText(name) {
    let count = 0;
    if(
        localStorage.getItem("cart") &&
        Array.isArray(JSON.parse(localStorage.getItem("cart")))
    ){
        count = JSON.parse(localStorage.getItem("cart")).length;
    }

    return `${name} <span class='badge badge-light'>${count}</span>`;
}