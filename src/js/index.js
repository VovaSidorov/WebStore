console.log("App was load ...");
import render from './lib/renderHtml';
import _header from './Components/Header/';

const header = _header();

// import createHtmlObject from "./lib/FactoryHtml";

//
// const div = createHtmlObject("div");
// const p = createHtmlObject("p");
//
// console.log(div);
// console.log(p);
//
// const  col = div.crateHtmlElement(
//     "col",
//     [
//         {name:"id",value:"col"}
//         ],
//    "Simple text" );
// const  row = div.crateHtmlElement("row",null,[col]);
// const  container = div.crateHtmlElement('container',null, [row]);

render("app", header);
