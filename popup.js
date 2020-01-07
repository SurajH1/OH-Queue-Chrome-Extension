let goToOpenQueue = document.getElementById('goToOpenQueue');
let RequestHelp = document.getElementById('RequestHelp');



chrome.storage.sync.get('color', function(data) {
  goToOpenQueue.style.backgroundColor = data.color;
  goToOpenQueue.setAttribute('value', data.color);
});


goToOpenQueue.onclick = function(element) {
  let time = Number(document.getElementById("opentime"));
  var currentTime = new Date();
  currentTime = Number(currentTime.getMinutes());
  console.log(currentTime);
   while(currentTime < time.value){
     console.log(currentTime);
   }

   chrome.tabs.executeScript(
    {file:'GetOn.js'});
    chrome.tabs.onUpdated.addListener(function(tab) {chrome.tabs.executeScript({
      file: 'RequestHelp.js'
  }); });
    return true;
  };


  RequestHelp.onclick = function(element) {
    var time = Number(document.getElementById("opentime"));
    var currentTime = new Date();
    currentTime = Number(currentTime.getMinutes());
    console.log("Request Help button clicked");
     while(currentTime < time.value){
       console.log(currentTime);
     }
     console.log("after wait");


      chrome.tabs.executeScript({
          file: 'RequestHelp.js'
      }); 
  

      
      return true;
    };




  

