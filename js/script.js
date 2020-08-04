/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Create variable named 'quotes' 
let quotes = [];

//Add five empty, comma separated objects to the array. 
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

  //Add additional quote object property [For exceeds grade]
   quotes[4].tags = 'PowerPuff Girls';

  // console.log(quotes[0]);
 
//Create getRandomQuote function: create a variable to store a random number representing the index of the quotes array, return a random quote object using the random number variable and bracket notation on the quotes array.

function getRandomQuote (){
  const randomNumber = Math.floor( Math.random() *quotes.length );
  return quotes[randomNumber];
}

//console.log(getRandomQuote());

// Create printQuote function

function printQuote(){
//console.log('printing quote');
//Create a variable to store a random quote object from the getRandomQuote() function
let randomQuote = getRandomQuote();
//console.log(randomQuote['source']);
//Create another variable to store the HTML string. 
let html = `<p class="quote"> ${randomQuote.quote} </p>
<p class="source"> ${randomQuote.source}
`;

//If the random quote object has a citation property, concatenate a <span> element with the class "citation" to the HTML string.
if (randomQuote.citation){html += `<span class="citation"> ${randomQuote.citation} </span>`};

//If the random quote object has a year property, concatenate a <span> element with the class "year" to the HTML string
if (randomQuote.year){html += `<span class="year"> ${randomQuote.year} </span>`};

//If the random quote object has a tag property, concatenate a <span> element with the class "tag" to the HTML string
if (randomQuote.tags){html += `<span class="tags"> ${randomQuote.tags} </span>`};

//Complete the string by concatenating a closing </p> tag to the HTML string.
html += `</p>`;

//Use code snippet and variable storing the string, to update the HTML with a random quote. This runs on load so is in the function so it can be called.

document.getElementById('quote-box').innerHTML = html;

//Random background colors when a new quote prints to the page [for exceeds grade]

const randomValue = () => Math.floor(Math.random() * 256);
function randomRGB(value){
  const color = `rgb( ${value()}, ${value()}, ${value()} )`// local scope
  return color;
}

document.body.style.backgroundColor = randomRGB(randomValue);

//function to return the full HTML string displaying a random quote.
return html;

}

//Auto-refreshed quotes using setInterval() method every 10 seconds [for exceeds grade]

setInterval(printQuote,10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

