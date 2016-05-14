// React when a browser action's icon is clicked.

var _topic;
var state;
var newURL = "http://www.google.com/";
var baseTab;


var doSearch = function(_tab){
        var tab=_tab;
        console.log(baseTab.id)

        if(_tab.Id===baseTab.Id && state==="on"){

          chrome.tabs.executeScript(baseTab.id,{
            code:'var'
          })

          chrome.tabs.executeScript(baseTab.id,{file:"/scripts/search.js"},function(array){
            console.log('executed search.js');
              setTimeout(doClick, 3000,baseTab);
            });
        };
};

var doClick = function(_tab){

    if(state==="on") {
      chrome.tabs.executeScript(baseTab.id,{file:"/scripts/click.js"},function(array){

            setTimeout(function(){
                chrome.tabs.update(baseTab.id,{url:newURL}, function(array){
                setTimeout(doSearch, 2000,baseTab);
              })
            },4000);

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