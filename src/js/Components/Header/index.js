import createHtmlObject from "../../lib/FactoryHtml";

export default function () {
    const div = createHtmlObject('div');

    const header = document.createElement("div");
    header.innerText ="header";
return header;
}