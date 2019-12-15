console.log("App was loaded...");

const products = [
    {name:"Product 1",desc:"Some text 1",imgSrc:'images/shoes01.jpg'},
    {name:"Product 2",desc:"Some text 2",imgSrc:'images/shoes02.jpg'},
    {name:"Product 3",desc:"Some text 3",imgSrc:'images/shoes03.jpg'},
    {name:"Product 4",desc:"Some text 4",imgSrc:'images/shoes04.jpg'},
    {name:"Product 5",desc:"Some text 5",imgSrc:'images/shoes05.jpg'},
    {name:"Product 6",desc:"Some text 6",imgSrc:'images/shoes06.jpg'},
    {name:"Product 7",desc:"Some text 7",imgSrc:'images/shoes07.jpg'},
    {name:"Product 8",desc:"Some text 8",imgSrc:'images/shoes08.jpg'}
];

const app = document.getElementById('app');

const divContainer = document.createElement('div');
divContainer.setAttribute('class', 'container');

const divRow = createProductsCatalogHtml(products);

divContainer.appendChild(divRow);

app.appendChild(divContainer);

//******************************************//

function createProductsCatalogHtml(array_products) {
    const _divRow = document.createElement('div');
    _divRow.setAttribute('class', 'row');

    array_products.map(el=>{
        _divRow.appendChild((createProductHtml(el.name,el.desc,el.imgSrc)))
    });

    return _divRow;
}

function createSingleHtmlElement(tagName='div',attr=null,inner=null) {
    const tag = document.createElement(tagName);
    attr.map(el=>{
       tag.setAttribute(el.name,el.value);
    });

   inner.map(el=>{
      if (el instanceof Node){
          tag.appendChild(el);
      } else {
          tag.innerHTML = el;
      }
   });

    return tag;
}

function createProductHtml(name,description,imgSrc) {
    const h5 = createSingleHtmlElement('h5',[{name:"class",value:"card-title"}],[name]);

    const p = createSingleHtmlElement('p',[{name:"class",value:"card-text"}],[description]);

    const a = createSingleHtmlElement('a',[{name:"class",value:"btn btn-primary"},{name:"href",value:"#"}],["More"]);

    const divCardBody = createSingleHtmlElement('div',[{name:"class",value:"card-body"}],[]);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);
    divCardBody.appendChild(a);

    const img = createSingleHtmlElement('img',[{name:"class",value:"card-img-top"},{name:"src",value:[imgSrc]}],[]);

    const divCard = createSingleHtmlElement('div',[{name:"class",value:"card"}],[]);
    divCard.appendChild(img);
    divCard.appendChild(divCardBody);

    const divCol = createSingleHtmlElement('div',[{name:"class",value:"col-12 col-sm-6 col-md-4 col-lg-3 my-2"}],[]);
    divCol.appendChild(divCard);

    return divCol;
}








