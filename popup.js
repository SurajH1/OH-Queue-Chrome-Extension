let goToOpenQueue = document.getElementById('goToOpenQueue');




chrome.storage.sync.get('color', function(data) {
  goToOpenQueue.style.backgroundColor = data.color;
  goToOpenQueue.setAttribute('value', data.color);
});


goToOpenQueue.onclick = function(element) {
  let time = document.getElementById("opentime");
  var currentTime = new Date();
  var TimeString = currentTime.getHours() + ":" + currentTime.getMinutes();
  console.log(TimeString + " " + time.value);
   while(TimeString != time.value){
     console.log(TimeString);
   }

   chrome.tabs.executeScript(
    {file:'GetOn.js'},function(element){
      setTimeout(function(){chrome.tabs.executeScript({file:'RequestHelp.js'});},5);
      
    }
    );
    return true;
  };




  

