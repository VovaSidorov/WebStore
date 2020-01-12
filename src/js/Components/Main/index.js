import getHtmlObject from '../../lib/FactoryHtml';
import element from "../Card";


export default function main() {
    const div = getHtmlObject("div");

    const x = element;

    const row = div.createHtmlElement(
        "row my-5",
        [{name:"id",value:"catalog"}],
        "No products yet. Please wait"
    );

    return div.createHtmlElement(
        "container",
        null,
        [row]
    );
}

