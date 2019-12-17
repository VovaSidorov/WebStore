import Div from "./Div";
import Paragraph from "./Paragraph";
import Img from "./Img";

export default function (tag) {
    console.log("Factory " +tag);

    switch (tag) {
        case "p":
            return new Paragraph();
        case "img":
            return new Img();
        default:
            return new Div;
    }
}