// React when a browser action's icon is clicked.

//var red= require('./red.js');

var _topic;

chrome.storage.sync.get('adTopic',function(topic){

  _topic=topic.adTopic;

  console.log(_topic);
})



chrome.browserAction.onClicked.addListener(function(tab) {

console.log(_topic);

var newURL = "http://www.google.com/";

var baseTab;

var doSearch = function(_tab){
    var tab=_tab;
    console.log(baseTab.id)

    if(_tab.Id===baseTab.Id){

      chrome.tabs.executeScript(baseTab.id,{
        code:'var'
      })

      chrome.tabs.executeScript(baseTab.id,{file:"search.js"},function(array){
        console.log('executed search.js');
          setTimeout(doClick, 3000,baseTab);
        });
    };

  };
var doClick = function(_tab){
  chrome.tabs.executeScript(baseTab.id,{file:"red.js"},function(array){

        setTimeout(function(){
            chrome.tabs.update(baseTab.id,{url:newURL}, function(array){
            setTimeout(doSearch, 2000,baseTab);
          })
        },4000);

      });
};

  chrome.tabs.create({ url: newURL }, function(_tab){
    console.log(_tab);
    console.log(_tab.id);
    baseTab=_tab;
    console.log(baseTab);
    doSearch(_tab);
  });

});