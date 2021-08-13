const base = document.querySelector("#base");
const height = document.querySelector("#height");
const OutputDiv = document.querySelector("#output");
const button = document.querySelector("#check");

button.addEventListener("click", calculate)

function calculate (){
    const baselength = Number(base.value);
    const heightdimension = Number(height.value);
    //console.log(baselength)
    const area = (baselength*heightdimension)/2;
    //console.log(area);
    OutputDiv.innerText = "The area of the triangle is "+ area;


}