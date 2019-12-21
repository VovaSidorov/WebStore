console.log("App was load ...");
import render from './lib/renderHtml';
import _header from './Components/Header/';
import _main from './Components/Main/';

const header = _header();
const main = _main();


render("app", header);
render("app", main);