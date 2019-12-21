import getHtmlObject from "../../lib/FactoryHtml";

const _product = {
    title: "Nike super sport 123",
    description: "Some text about Nike super sport 123",
    image: "images/shoes01.jpg"
};

const products = [
    {..._product, image: "images/shoes01.jpg"},
    {..._product, image: "images/shoes02.jpg"},
    {..._product, image: "images/shoes03.jpg"},
];

const div = getHtmlObject("div");
const img = getHtmlObject("img");
const p = getHtmlObject("p");
const a = getHtmlObject("a");
const h5 = getHtmlObject("h5");

const createCardElement = (product) => {
    const cardImgTop = img.createHtmlElement(
        "card-img-top",
        [
            {name: "src", value: product.image},
            {name: "alt", value: product.title},
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
        product.description
    );
    const cardTitle = h5.createHtmlElement(
        "card-title",
        null,
        product.title
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
        "col-4",
        null,
        [card]
    );
};



export default createCardElement(products[0]);
