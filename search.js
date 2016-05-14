

var _topic;

chrome.storage.sync.get('adTopic',function(topic){

  _topic=topic.adTopic;

  console.log('this is in the search file', _topic);

  window.location.href = 'https://www.google.com/';

  var _formArray=document.querySelectorAll('form');


  var searchArrays={
    travel:["Travel to Spain","trip to spain","flights to spain","best restaurant in spain","learn spanish","visit barcelona","visit spain","guide spain travel","guided trips to spain","hotels in madrid","best cities in spain to visit"],
    fitness:[
    "best treadmills",
    "good treadmills",
    "buy a treadmill",
    "gyms near me",
    "cheap gym memberships",
    "work out classes",
    "soul cycle",
    "flywheel",
    "spin classes",
    "best spin classes",
    "spinn class",
    "fitness",
    "fitness equipment",
    "fitness exercise",
    "sports fitness",
    "health fitness",
    "fitness goods",
    "sporting goods fitness",
    "fitness 24",
    "hour fitness",
    "24 hour fitness",
    "first fitness",
    "fitness training",
    " la fitness",
    "fitness stuff",
    "fitness exercise equipment",
    "Glute Exercises",
    "Calf Exercises",
    "Hamstring workout",
    "Bicep Exercises",
    "free weights",
    "how to bench press",
    "Neck Exercises",
    "Chest Exercises",
    "crossfit",
    "Yoga",
    "zumba",
    "insanity workout",
    "p90x",
    "couch to 5k",
    "kettlebells",
    "squat challenge",
    "planks",
    "diet",
    "lose weight",
    "health food",
    "how to lose weight",
    "train for marathon"
    ]
  };

  console.log(searchArrays.fitness);

  var searchTerms;

  if(searchArrays[_topic].length>2){
    searchTerms=searchArrays[_topic];
  } else {
    searchTerms=searchArrays.fitness;
  }

  var _index=Math.floor((Math.random() * searchTerms.length) + 1);

   if(_formArray[0]){
    _formArray[0].q.value=searchTerms[_index];
    _formArray[0].submit();
    }

})

