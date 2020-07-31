/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Create variable named 'quotes' 
let quotes = [];

//Add five empty, comma separated objects to the array

for (i = 0; i < 5; i ++) {
  quotes.push({})
   }
//Add data to quote objects. quote string for actual quote and source string for the person or character who said it
  quotes[0].quote = 'It\'s not about what it is, it’s about what it can become';
  quotes[0].source = 'The Lorax';
  quotes[1].quote = '[Kids] don\'t remember what you try to teach them. They remember what you are.';
  quotes[1].source = 'Jim Henson';
  quotes[2].quote = 'Love isn\'t a state of perfect caring. It is an active noun like struggle. To love someone is to strive to accept that person exactly the way he or she is, right here and now.';
  quotes[2].source = 'Fred Rogers';
  quotes[3].quote = 'There are no bad people, there are people with insufficient information to make appropriate decisions';
  quotes[3].source = 'Jacque Fresco';
  quotes[4].quote = 'There\'s nothing wrong with talking to yourself.';
  quotes[4].source = 'Bubbles';

  //Add a citation and year
  quotes[0].citation = 'Dr. Seuss The Lorax';
  quotes[0].year = 1971;

  // console.log(quotes[0]);
 
  /***
 * `getRandomQuote` function
In the function body, create a variable to store a random number ranging from zero to the index of the last item in the quotes array.
Lastly, the function should return a random quote object using the random number variable above and bracket notation on the quotes array.
***/
function getRandomQuote (){
  const randomNumber = Math.floor( Math.random() *quotes.length );
  return quotes[randomNumber];
}

console.log(getRandomQuote());
/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);