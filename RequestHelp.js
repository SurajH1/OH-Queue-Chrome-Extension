let buttons = document.getElementsByClassName("ui fluid button");
console.log("Just executed the RequestHelp.js script");

for(var i = 0 ; i < buttons.length; ++i){
    console.log(i.toString());
    console.log(buttons[i].value);
    
    if(buttons[i].innerHTML == "Request Help"){
        console.log("Get  notified");
        buttons[i].click();
        break;
    }
}//for



