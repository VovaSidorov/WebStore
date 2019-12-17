export default function BuilderHtml(tag) {

   this.crateHtmlElement = (className, attr, content) => {
      console.log("Builder >>>");
      const html = document.createElement(tag);

         html.className = className || "";
         if (Array.isArray(attr)){
            attr.map(el=>html.setAttribute(el.name, el.value))
         }
         if (typeof content === "string"){
            html.innerText = content;
         }else if (Array.isArray(content)){
            content.map(el=>(el instanceof Node?html.appendChild(el):""))
         }

      return html;
   }

}