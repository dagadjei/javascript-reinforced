const buttons = document.querySelectorAll(".btn")
const value = document.querySelector("#value")
let count = 0;

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        const selected = e.currentTarget.classList;
        
        if(selected.contains("decrease")){
            count--;
        }else if(selected.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        // if(count=0){
        //     value.style.color = "blue"
        // }if(count<0){
        //     value.style.color = "red"
        // }if(count>0){
        //     value.style.color = "green"
        // }
        value.textContent = count;
    });
    
});
