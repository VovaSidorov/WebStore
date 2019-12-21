import getHtmlObject from '../../lib/FactoryHtml';

export default function Main() {
    const div = getHtmlObject("div");

    return div.createHtmlElement(
        "container"
    );
}