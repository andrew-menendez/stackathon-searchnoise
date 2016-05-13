

console.log('search');


var _formArray=document.querySelectorAll('form');


var searchArray=["Travel to Spain","trip to spain","flights to spain","best restaurant in spain","learn spanish","visit barcelona","visit spain","guide spain travel","guided trips to spain","hotels in madrid","best cities in spain to visit"]


var _index=Math.floor((Math.random() * 10) + 1);

 if(_formArray[0]){
  _formArray[0].q.value=searchArray[_index];
  _formArray[0].submit();
  }

