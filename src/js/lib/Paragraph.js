import BuilderHtml from "./BuilderHtml";

export default function Paragraph() {
    const tag = 'p';
    BuilderHtml.call(this, tag);
}