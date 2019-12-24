import getHtmlObject from "../../lib/FactoryHtml";
import render from '../../lib/renderHtml'

const ul = getHtmlObject("ul");
const li = getHtmlObject("li");
const div = getHtmlObject("div");

const createItemRow = ({title,price}) => {
    const itemTitle = div.createHtmlElement(
        "item-title col-8 col-sm-6",
        null,
        title
    );
    const itemPrice = div.createHtmlElement(
        "item-price col-4 col-sm-6",
        null,
        price
    );
    return div.createHtmlElement(
        "row",
        null,
        [itemTitle,itemPrice]
    );
};

export default (list) => {
    console.log(list);

    const liList = list.map(el => {

        return li.createHtmlElement(
            "card-item-element",
            null,
            [createItemRow(el)]
        )
    });

    liList.unshift(li.createHtmlElement(
        "card-item-element font-weight-bold",
        null,
        [createItemRow({title: "Product name", price:"Price"})]
    ));

    const cardProductList = ul.createHtmlElement(
        "card-items-list list-unstyled",
        null,
        liList
    );
    render("modal-content-section", cardProductList);
};