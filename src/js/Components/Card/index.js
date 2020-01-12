import getHtmlObject from "../../lib/FactoryHtml";
import './style.scss';

const limit = 100;

const div = getHtmlObject("div");
const img = getHtmlObject("img");
const p = getHtmlObject("p");
const a = getHtmlObject("a");
const h5 = getHtmlObject("h5");
const span = getHtmlObject("span");

const createCardElement = (product) => {

    const {id,price,title,description,image}=product;

    const cardImgTop = img.createHtmlElement(
        "card-img-top",
        [
            {name: "src", value: image},
            {name: "alt", value: product},
        ]
    );

    const priceSpan = span.createHtmlElement(
        "card-price",
        null,
        `${price} $`
    );

    const cardLink = a.createHtmlElement(
        "btn btn-primary add_to_cart",
        [
            {name:"data-id", value: id},
            {name:"data-price", value: price},
            {name:"data-title", value: title},
        ],
        "Add to cart"
    );

    const actionSection = div.createHtmlElement(
        "card-action d-flex justify-content-between align-items-center",
        null,
        [priceSpan,cardLink]
    );


    const cardText = p.createHtmlElement(
        "card-text",
        null,
        ((description[limit+1] === " ")?description.substring(0,limit):description.substring(0,limit).split(" ").slice(0,-1).join(" ")) + "..."
    );
    const cardTitle = h5.createHtmlElement(
        "card-title",
        null,
        title
    );
    const cardBody = div.createHtmlElement(
        "card-body",
        null,
        [cardTitle,cardText,actionSection]
    );

    const card = div.createHtmlElement(
        "card",
        null,
        [cardImgTop,cardBody]
    );
    return div.createHtmlElement(
        "col-12 col-md-4 col-lg-3 my-2",
        null,
        [card]
    );
};

export default createCardElement;
