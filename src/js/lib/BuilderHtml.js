export default function BuilderHtml(tag) {

   this.createHtmlElement = (className, attr, content) => {
      const html = document.createElement(tag);

         html.className = className || "";
         if (Array.isArray(attr)){
            attr.map(el=>html.setAttribute(el.name, el.value))
         }
         if (typeof content === "string"){
            html.innerHTML = content;
         }else if (Array.isArray(content)){
            content.map(el=>(el instanceof Node?html.appendChild(el):""))
         }

      return html;
   }

}