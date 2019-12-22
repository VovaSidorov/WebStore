import getHtmlObject from "../../lib/FactoryHtml";
import products from "../../products";

const limit = 100;

const div = getHtmlObject("div");
const img = getHtmlObject("img");
const p = getHtmlObject("p");
const a = getHtmlObject("a");
const h5 = getHtmlObject("h5");

const createCardElement = (product) => {

    const {title,description,image}=product;

    const cardImgTop = img.createHtmlElement(
        "card-img-top",
        [
            {name: "src", value: image},
            {name: "alt", value: product},
        ]
    );
    const cardLink = a.createHtmlElement(
        "btn btn-primary",
        null,
        "Add to cart"
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
        [cardTitle,cardText,cardLink]
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

products.map(el=>createCardElement(el));



export default products.map(el=>createCardElement(el));
