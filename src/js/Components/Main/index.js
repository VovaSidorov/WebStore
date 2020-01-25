import getHtmlObject from '../../lib/FactoryHtml';
import element from "../Card";


export default function main() {
    const div = getHtmlObject("div");

    const rowCatalog = div.createHtmlElement(
        "row my-5",
        [{name:"id", value: "catalog"}],
        "No products yet. Please wait"
    );

    const rowPagination = div.createHtmlElement(
        "row my-5 justify-content-center",
        [{name:"id", value: "pagination"}],
        ""
    );

    return div.createHtmlElement(
        "container",
        null,
        [rowCatalog, rowPagination]
    );
}
