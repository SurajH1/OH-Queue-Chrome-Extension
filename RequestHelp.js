let buttons = document.getElementsByClassName("ui button");
for(var i = 0 ; i < buttons.length; ++i){
    if(buttons[i].value == "Get notified"){
        buttons[i].value.click();
        break;
    }
}
