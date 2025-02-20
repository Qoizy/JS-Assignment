// 1. Select the container where the quote will be added

const quoteContainer = document.getElementById('quote-container');


// 2. Create the quote container

const quoteDiv = document.createElement('div');

// quoteDiv.style.backgroundColor = '#fff';

quoteDiv.style.padding = '20px';

quoteDiv.style.borderRadius = '8px';

quoteDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

quoteDiv.style.width = '80%';

quoteDiv.style.margin = '0 auto'; 


// 3. Create the blockquote element

const blockquote = document.createElement('blockquote');

blockquote.style.fontFamily = 'Georgia, serif';

blockquote.style.fontSize = '1.5em';

blockquote.style.fontStyle = 'italic';

blockquote.style.color = 'white';

blockquote.style.position = 'relative';

blockquote.style.padding = '20px';

blockquote.style.margin = '0';


// 4. Add quote text with opening and closing quotes

blockquote.innerHTML = `

    &ldquo; See you on the other side, where we will discuss the Events in JavaScript. 

    May the force be with you. &rdquo;

`;


// Append the blockquote to the quote container and to the main container in the HTML

quoteDiv.appendChild(blockquote);

quoteContainer.appendChild(quoteDiv);

