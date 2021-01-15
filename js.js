const textQuote = document.querySelector('#outputJS');

const button1 = document.querySelector('#button1');


const quoteArray = [
    "Because of your smile, you make life more beautiful.",
    "Life is a series of baby steps.",
    "Lead from the heart, not the head.",
    "Take your time and enjoy life."
]

button1.addEventListener('click', function(){ 
    textQuote.innerHTML= quoteArray[(Math.random() * quoteArray.length) |0]
}
);


