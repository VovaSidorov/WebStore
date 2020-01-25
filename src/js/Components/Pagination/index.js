import getHtmlObject from "../../lib/FactoryHtml";

const nav = getHtmlObject("nav");
const ul = getHtmlObject("ul");
const li = getHtmlObject("li");
const a = getHtmlObject("a");
const span = getHtmlObject("span");

const controlItemHtml = content => {
    const x = span.createHtmlElement(
        "",
        [{name: "aria-hidden", value: "true"}],
        content
    );
    return paginationItemHtml([x]);
};

const paginationItemHtml = (linkContent, isDisabeled=false) => {
    const pageLink = a.createHtmlElement(
        "page-link",
        [{name: "href", value: "#"}],
        linkContent
    );

    return li.createHtmlElement(
        `page-item ${isDisabeled?"disabled":""}`,
        null,
        [pageLink]
    );
};

export default () => {

    const ulPagination = ul.createHtmlElement(
        "pagination justify-content-center",
        null,
        [controlItemHtml("&laquo;"),paginationItemHtml("2", true),controlItemHtml("&raquo;")]
    );
    return nav.createHtmlElement(
        "",
        [{name: "aria-label", value: "Page navigation"}],
        [ulPagination]
    );
}