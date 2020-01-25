const getDataForPaginationOnCurrentPage = (data,perPage, pageUrl) => {

    const {products} = data;
    const currentPage = getCurrentPageNumber(pageUrl);

    let start, end;
    start = perPage*(currentPage-1);
    end = start+perPage;

    return {
        products: products.slice(start,end),
        currentPage: currentPage,
        total: products.length,
        perPage: perPage
    }
};

const isSearchQueryValid = (pageData) => pageData.length > 6 && pageData.indexOf("?") >= 0;

const isPageNumberInQueryValid = (search) => search[0] === "page" && Number.isInteger(parseInt(search[1])) && parseInt(search[1]) > 0;

const getCurrentPageNumber = (pageData) => {
    if( isSearchQueryValid(pageData) ){
        const parseQuerySearch = pageData.substr(1).split("=");

        if(isPageNumberInQueryValid(parseQuerySearch)){
            return parseInt(parseQuerySearch[1]);
        }
    }
    return 1;
};

export default (pageUrl, perPage) => {

    return fetch("https://zloyleva.github.io/js_40_8/src/js/products.json")
        .then((res) => {
            return res.json()
        })
        .then(data => {
            return getDataForPaginationOnCurrentPage(data, perPage, pageUrl);
        })
}