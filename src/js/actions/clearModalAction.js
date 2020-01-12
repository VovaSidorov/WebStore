
export default () =>{
document.getElementById("closeModal")
    .addEventListener("click",()=>{
        console.log("closeModal");
        document.getElementById("modal-content-section").innerHTML = "";
    });
}
