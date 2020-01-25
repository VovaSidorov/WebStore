import getHtmlObject from "../../lib/FactoryHtml";

const nav = getHtmlObject("nav");
const ul = getHtmlObject("ul");
const li = getHtmlObject("li");
const a = getHtmlObject("a");
const span = getHtmlObject("span");

const controlItemHtml = (content, pageNumber) => {
    const arrow = span.createHtmlElement(
        "",
        [{name: "aria-hidden", value: "true"}],
        content
    );
    return paginationItemHtml([arrow], pageNumber);
};

const paginationItemHtml = (linkContent, pageNumber, isDisabled=false) => {
    const pageLink = a.createHtmlElement(
        "page-link",
        [{name: "href", value: `?page=${pageNumber}`}],
        linkContent
    );

    return li.createHtmlElement(
        `page-item ${isDisabled?"disabled":""}`,
        null,
        [pageLink]
    );
};

export default (data) => {

    const {currentPage,total,perPage} = data;
    let paginationItems = [];

    if(currentPage !== 1){
        paginationItems.push(controlItemHtml("&laquo;", currentPage - 1));
    }
    paginationItems.push(paginationItemHtml(`${currentPage}`,null,true));

    if(currentPage*perPage < total){
        paginationItems.push(controlItemHtml("&raquo;", currentPage + 1));
    }

    const ulPagination = ul.createHtmlElement(
        "pagination",
        null,
        paginationItems
    );
    return nav.createHtmlElement(
        "",
        [{name: "aria-label", value: "Page navigation"}],
        [ulPagination]
    );
}