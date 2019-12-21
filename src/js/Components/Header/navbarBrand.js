import getHtmlObject from "../../lib/FactoryHtml";


const a = getHtmlObject('a');
    const navbarBrand = a.createHtmlElement(
        "navbar-brand",
        [{name:"href",value:"#"}],
        "Web store"
    );
    export default  navbarBrand;

