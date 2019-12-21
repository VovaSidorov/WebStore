import getHtmlObject from '../../lib/FactoryHtml';


export default function main() {
    const div = getHtmlObject("div");

    // ************************************ //
    const img = getHtmlObject("img");
    const p = getHtmlObject("p");
    const a = getHtmlObject("a");
    const h5 = getHtmlObject("h5");

    const cardImgTop = img.createHtmlElement(
        "card-img-top",
        [
            {name: "src", value: "images/shoes01.jpg"},
            {name: "alt", value: "Nike super sport 123"},
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
        "Some text about Nike super sport 123"
    );
    const cardTitle = h5.createHtmlElement(
        "card-title",
        null,
        "Nike super sport 123"
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
    const element = div.createHtmlElement(
        "col-4",
        null,
        [card]
    );

    // ************************************ //

    const row = div.createHtmlElement(
        "row",
        null,
        [element]
    );

    return div.createHtmlElement(
        "container",
        null,
        [row]
    );
}


// <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>