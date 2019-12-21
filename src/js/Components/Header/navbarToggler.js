import getHtmlObject from "../../lib/FactoryHtml";
const button = getHtmlObject('button');
const span = getHtmlObject('span');

    const navbarTogglerIcon = span.createHtmlElement("navbar-toggler-icon");

    const navbarToogler = button.createHtmlElement(
        "navbar-toggler",
        [ {name:"type", value:"button"},
            {name:"data-toggle", value:"collapse"},
            {name:"data-target", value:"#navbarSupportedContent"},
            {name:"aria-controls", value:"navbarSupportedContent"},
            {name:"aria-expanded", value:"false"},
            {name:"aria-label", value:"Toggle navigation"}],
        [navbarTogglerIcon]
    );
export default  navbarToogler;