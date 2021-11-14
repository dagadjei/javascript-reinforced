const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let i = randomNum();
    document.body.style.backgroundColor = colors[i];
    color.textContent = colors[i];
});

function randomNum(){
    const num = Math.floor(Math.random()*colors.length);
    return num;
};