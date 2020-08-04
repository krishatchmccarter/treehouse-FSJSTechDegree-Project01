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

//console.log(getRandomQuote());

/***
 * `printQuote` function
***/
function printQuote(){
  console.log('printing quote');
//In the body of the printQuote function, create a variable to store a random quote object from the getRandomQuote() function
let randomQuote = getRandomQuote();
//console.log(randomQuote['source']);
//Create another variable to store the HTML string. 
let html = `<p class="quote"> ${randomQuote.quote} </p>
<p class="source"> ${randomQuote.source}
`;

//Create two separate if statements below the variables
//1. If the random quote object has a citation property, concatenate a <span> element with the class "citation" to the HTML string.
if (randomQuote.citation){html += `<span class="citation"> ${randomQuote.citation} </span>`};

//2. If the random quote object has a year property, concatenate a <span> element with the class "year" to the HTML string
if (randomQuote.year){html += `<span class="year"> ${randomQuote.year} </span>`};

//Below the if statements, complete the string by concatenating a closing </p> tag to the HTML string. This is the closing tag for the second paragraph with the class source.

// Use the following code snippet, along with the variable storing the string you’ve assembled, to update your project’s HTML with a random quote. This runs on load, not at an event. need to create a function and call it.
document.getElementById('quote-box').innerHTML = html

html += `</p>`

//Set the printQuote function to return the full HTML string displaying a random quote.

return html;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);