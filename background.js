// React when a browser action's icon is clicked.

var _topic;
var state;
var newURL = "http://www.google.com/";
var baseTab;

var _seconds;



chrome.storage.sync.get('timeSetting', function(value) {
  _seconds=value.timeSetting;
  console.log('seconds set to',_seconds);
})

var doSearch = function(_tab){

  chrome.storage.sync.get('timeSetting', function(value) {

      _seconds=value.timeSetting;
      console.log('seconds set to',_seconds);
        var miliseconds=_seconds*1000;
        var tab=_tab;
        console.log(baseTab.id)

        if(_tab.Id===baseTab.Id && state==="on"){

          chrome.tabs.executeScript(baseTab.id,{
            code:'var'
          })

          chrome.tabs.executeScript(baseTab.id,{file:"/scripts/search.js"},function(array){
            console.log('executed search.js');
              setTimeout(doClick, miliseconds,baseTab);
            });
        };

    });
};

var doClick = function(_tab){
    var miliseconds=_seconds*1000;

    if(state==="on") {
      chrome.tabs.executeScript(baseTab.id,{file:"/scripts/click.js"},function(array){

            setTimeout(function(){
                chrome.tabs.update(baseTab.id,{url:newURL}, function(array){
                setTimeout(doSearch, miliseconds,baseTab);
              })
            },miliseconds);

          });
    };
};

chrome.browserAction.onClicked.addListener(function(tab) {

  console.log(_topic);

  if(state!="on"){
      chrome.tabs.create({ url: newURL }, function(_tab){
        state="on";
        console.log(_tab.id);
        baseTab=_tab;
        console.log(baseTab);
        doSearch(_tab);
        chrome.browserAction.setBadgeText({text:"on"})
      });

  }// end state if !on;
  else if (state==="on"){
    chrome.tabs.remove(baseTab.id, function() {
        state="off";
        chrome.browserAction.setBadgeText({text:""})
     });
  };

});