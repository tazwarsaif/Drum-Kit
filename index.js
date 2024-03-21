const buttonInnerHtml = document.querySelectorAll("button")

for(let i=0; i<buttonInnerHtml.length; i++){
    const obj = buttonInnerHtml[i];
    obj.addEventListener("click",function(){
        animate(obj.innerHTML);
        presskey(obj.innerHTML);
    });
}
const keypress = document.addEventListener("keypress",function(event){
    animate(event.key);
    presskey(event.key);
});

function presskey(key){
    switch(key){
        case "w":
            var audio = new Audio("./crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./tom-1.mp3");
            audio.play();
            break;                
        case "s":
            var audio = new Audio("./snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./kick-bass.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./tom-4.mp3");
            audio.play();
            break;
    }
}

function animate(key){
    const a = document.querySelector("."+key)
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove("pressed");
    },100)
    
}