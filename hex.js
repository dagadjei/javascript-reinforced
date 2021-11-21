

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function(){
    let newColor = "#";
    for(let i=0; i<6; i++){
        newColor += hex[random()]
    }
    document.body.style.backgroundColor = newColor
    color.textContent = newColor
});

function random(){
    let num = Math.floor(Math.random()*hex.length)
    return num
}