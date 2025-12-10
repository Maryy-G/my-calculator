
const display=document.getElementById("display");



function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";

}

function calculate(){
    try{
        display.value= math.evaluate(display.value);
    }
    
    catch(error){
        display.value="Error";
    }


}

window.onload=function(){
    const sound=document.getElementById("click-sound");

    document.querySelectorAll("button").forEach(btn=>{
      btn.addEventListener("click",()=>{
        sound.currentTime=0;
        sound.play();
    });
});


}

