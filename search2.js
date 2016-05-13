
//var doesjq=$("body");
//console.log('jquery body:',doesjq);

console.log('search');

// console.log(document.querySelectorAll('input'));
// console.log(document.querySelectorAll('.gsfi'));
// console.log(document.querySelectorAll('#tsf'));

var _formArray=document.querySelectorAll('form');
console.log(_formArray[0]);
//input name of q is the query value...

if(_formArray[0]){
  _formArray[0].q.value="ponies";

  _formArray[0].submit();
};



