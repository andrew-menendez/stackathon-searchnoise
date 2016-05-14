// React when a browser action's icon is clicked.

//var red= require('./red.js');



chrome.browserAction.onClicked.addListener(function(tab) {

  var newURL = "http://www.google.com/";

  var operation="search";

  var toggleOp = function(_operation){
    if(_operation==="search"){
      operation="click";
    } else if (_operation==="click"){
      operation="search";
    }

  };

  // cant seem to get timer to work, trying a loop instead

  // var myVar = setInterval(myTimer, 2000);

  // function myTimer(operation,_tab) {
  //   if(operation==="search"){
  //     chrome.tabs.executeScript(_tab.Id,{file:"search.js"});
  //   } else if (operation==="click"){
  //     chrome.tabs.executeScript(_tab.Id,{file:"red.js"})
  //   }
  //   toggleOp(operation);
  // }

  //loop version

var baseTab;

var doSearch = function(_tab){
    var tab=_tab;
    console.log(baseTab.id)

    if(_tab.Id===baseTab.Id){
       chrome.tabs.executeScript(baseTab.id,{file:"search.js"},function(array){
        setTimeout(doClick, 3000,baseTab);
      });
    }


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