

//google
console.log(document.querySelectorAll('.ads-ad'));

var googleAdLinks=document.querySelectorAll('.ads-ad a');

var results=document.querySelectorAll('.r a');

console.log(googleAdLinks);

var clickAdd = function(googleAdLinks){
  console.log('clicking add');
  googleAdLinks[0].click()

};


var _index=Math.floor((Math.random() * 10) + 1);

if(_index>5 && googleAdLinks){
  clickAdd(googleAdLinks);
} else if (results[5]) {
  results[5].click();
};





