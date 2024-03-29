const button = document.querySelector('.see');
const card = document.querySelector('.card');
const showText = document.querySelector('.show-text');

button.addEventListener('click', function(){
    card.style.transform = "rotateY(180deg)";
    setTimeout(function(){
        document.querySelector('.hidden-visa').style.display = "none";
        document.querySelector('.showed-visa').style.display = "inline";
        showText.innerHTML = "Hide details";
    }, 500);

});
