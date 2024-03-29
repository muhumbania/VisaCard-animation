const button = document.querySelector('.see');
const card = document.querySelector('.card');
const showText = document.querySelector('.show-text');
let position = false;

button.addEventListener('click', function(){
    card.style.transform = "rotateY(180deg)";
    position = !position;

    if(position){
        setTimeout(function(){
            card.style.transform = "rotateY(180deg)";
            document.querySelector('.hidden-visa').style.display = "none";
            document.querySelector('.showed-visa').style.display = "inline";
            showText.innerHTML = "Hide details";
        }, 500);
    }else{
        setTimeout(function(){
            card.style.transform = "rotateY(0deg)";
            document.querySelector('.hidden-visa').style.display = "inline";
            document.querySelector('.showed-visa').style.display = "none";
            showText.innerHTML = "Show details";
        }, 500);
    }
});


