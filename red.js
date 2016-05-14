//document.body.style.backgroundColor="blue";

//google
console.log(document.querySelectorAll('.ads-ad'));

var googleAdLinks=document.querySelectorAll('.ads-ad a');

console.log(googleAdLinks);

var clickAdd = function(googleAdLinks){
  console.log('clicking add');
  googleAdLinks[0].click()

};

// var backToGoogle=function(){
//   console.log('take you back to google');
//   window.location.href = 'https://www.google.com/';
// }

// var findContent = function() {
//   console.log("find content running");
//   var formInputs=document.querySelectorAll('form input')
//   var buttons1=document.querySelectorAll('.button');
//   var buttons2=document.querySelectorAll('.large-button');
//   var buttons3=document.querySelectorAll('.small-button');
//   var links = document.querySelectorAll('a');

//   console.log(links);

//   if(formInputs){

//     for(var input in formInputs){

//       if(formInputs[input].value){
//         if(formInputs[input].type==="text"){
//           //formInputs[input].value="Spain!"
//         }
//       };
//       if(formInputs[input].type==="submit"){
//         formInputs[input].click();
//       };
//     };
//   } else  if(buttons1.length>0){ // buttons
//     buttons1[0].click();
//   } else if (buttons2.length>0){
//     buttons2[0].click();
//   } else if(buttons3.length>0){
//     buttons3[0].click();
//   } else if (links[0]){
//     links[0].click();
//   };

//   setTimeout(backToGoogle, 3000);
// };


if(googleAdLinks){

  clickAdd(googleAdLinks);

};


