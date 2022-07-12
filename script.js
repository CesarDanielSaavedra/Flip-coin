let i = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    i++;
    coin.style.animation = "none";


    if(i % 2 == 0){
        setTimeout(function(){
            coin.style.animation = "spin-tails 1s reverse";
        }, 100);
    } 
    else{
        setTimeout(function(){
            coin.style.animation = "spin-heads 1s forwards";
        }, 100);
    }
    
    disableButton();
});

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },000);
}
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
});