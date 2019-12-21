import getHtmlObject from "../../lib/FactoryHtml";
import navbarBrand from "./navbarBrand";
import navbarCollapse from "./navbarCollapse";
import navbarToggler from "./navbarToggler";

export default function Header() {
    const nav =getHtmlObject('nav');

    return nav.createHtmlElement("navbar navbar-expand-lg navbar-dark bg-dark",
        null,
        [navbarBrand,navbarToggler,navbarCollapse]);
}