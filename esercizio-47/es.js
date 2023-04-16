let lables = Array.from( document.getElementsByTagName("label"));
let inputs = Array.from( document.getElementsByClassName("form-input"));

for (let i = 0 ;i < lables.length;i++){
    console.log(lables[i].innerText+" "+inputs[i].value)
}