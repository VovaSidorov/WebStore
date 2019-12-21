import getHtmlObject from "../../lib/FactoryHtml";

const a = getHtmlObject('a');
const ul = getHtmlObject('ul');
const li = getHtmlObject('li');
const div = getHtmlObject('div');

    
    const navItems =[];
    navItems.push(li.createHtmlElement(
        "nav-item",
        null, [a.createHtmlElement(
            'nav-link',
            [{name:"href",value:"/"}],
            "Home"
        )
        ]
    ));
    navItems.push(li.createHtmlElement(
        "nav-item",
        null, [a.createHtmlElement(
            'nav-link',
            [{name:"href",value:"/"}],
            "Catalog"
        )
        ]
    ));
    const navbarNav = ul.createHtmlElement("navbar-nav",null,navItems);
    const navbarCollapse = div.createHtmlElement(
        "collapse navbar-collapse",
        [{name:"id", value:"navbarSupportedContent"}],
        [navbarNav]
    );

export default  navbarCollapse;