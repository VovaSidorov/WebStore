import getHtmlObject from "../../lib/FactoryHtml";
import render from '../../lib/renderHtml'

const ul = getHtmlObject("ul");
const li = getHtmlObject("li");

export default (list) => {
    console.log(list+45645456456);
console.log("sdfsdfsdfsdfsdfsdfsdf");
    const liList = list.map(el => li.createHtmlElement(
        "card-item-element",
        null,
        el.title
    ));

    const cardProductList = ul.createHtmlElement(
        "card-items-list list-unstyled",
        null,
        liList
    );
    render("modal-content-section", cardProductList);
};