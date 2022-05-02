let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElemendById("character");
let jumping = 0;


HTMLBodyElement.addEventListener('animationiteration',() =>{
    let random = (Math.random()*300)
});

setInterval(function(){ //gravity
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
     //adds three pixels so every 10 ms it moves the ball down if not jumping
    if (jumping ==0){
        character.style.top=(characterTop+3)+"px";
    }
},10); //this function runs every 10 ms and will keep returning the top position of the character div

function jump(){
    jumping = 1
    let jumpCount =0;
    let jumpingInterval = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue)
        if((character >6) && (jumpCount<15)){
            character.style.top = (characterTop -5)+"px"; //goes up 5 pixels
        }
        //let characterTop = character.style.top=(characterTop-5)+"px"; //go up 5 pixels
        if (jumpCount>15){
            clearInterval(jumpingInterval)
            jumping = 0;
            jumpCount=0;
        }
        jumpCount++;

    },10);
}
