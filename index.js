const button = document.querySelector('.see');
const card = document.querySelector('.card');

button.addEventListener('click', function(){
    card.style.transform = "rotateY(180deg)";

});
