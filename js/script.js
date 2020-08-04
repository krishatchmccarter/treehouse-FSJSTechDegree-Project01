/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Create variable named 'quotes' with five quote objects
let quotes = [
{ quote: 'It\'s not about what it is, it’s about what it can become',
  source: 'The Lorax',
  citation: 'Dr. Seuss The Lorax',
  year: 1971},
{ quote: '[Kids] don\'t remember what you try to teach them. They remember what you are.',
  source: 'Jim Henson'},
{ quote: 'Love isn\'t a state of perfect caring. It is an active noun like struggle. To love someone is to strive to accept that person exactly the way he or she is, right here and now.',
  source: 'Fred Rogers'},
{ quote: 'There are no bad people, there are people with insufficient information to make appropriate decisions',
  source: 'Jacque Fresco'},
{ quote: 'There\'s nothing wrong with talking to yourself.',
  source: 'Bubbles',
  tags: 'PowerPuff Girls'},    
];

//Create getRandomQuote function: create a variable to store a random number representing the index of the quotes array, return a random quote object using the random number variable and bracket notation on the quotes array.

function getRandomQuote (){
  const randomNumber = Math.floor( Math.random() *quotes.length );
  return quotes[randomNumber];
}

// Create printQuote function

function printQuote(){

//Create a variable to store a random quote object from the getRandomQuote() function
let randomQuote = getRandomQuote();

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

}

//Auto-refreshed quotes using setInterval() method every 10 seconds [for exceeds grade]

setInterval(printQuote,10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

