export default (place, Html) => {
    const element = document.getElementById(place);
    element.appendChild(Html);
}