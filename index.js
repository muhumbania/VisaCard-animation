const button = document.querySelector('.see');
const card = document.querySelector('.card');
const showText = document.querySelector('.show-text');
let position = false;

button.addEventListener('click', function(){
    card.style.transform = "rotateY(180deg)";
    position = !position;

    if(position){

        Yrotation("none", "inline", "hide details", "rotateY(180deg)");
    }else{

        Yrotation("inline", "none", "show details", "rotateY(0deg)");
    }
});

function Yrotation(hiddenView, showedView, legend, degree){
    setTimeout(function(){
        card.style.transform = degree;
        document.querySelector('.hidden-visa').style.display = hiddenView;
        document.querySelector('.showed-visa').style.display = showedView;
        showText.innerHTML = legend;
        button.setAttribute('name', legend.substring(0, 4));
    }, 500);
}

