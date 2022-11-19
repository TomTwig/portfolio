const quoteContainer = document.getElementById('quote');
const quoteText = document.getElementById('quote__text-content');
const quoteAuthor = document.getElementById('quote__text-author');
const quoteButton = document.getElementById('quote__button');

let quoteArray = [];


async function getQuotes(){

    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        quoteArray = await response.json();
        newQuote();
    }catch(error){
        quoteContainer.style.visibility = "hidden";
    }
}

async function newQuote(){

    let quote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

    if (!quote.author){
        quoteAuthor.textContent = "Unknown"
    }else{
        quoteAuthor.textContent = quote.author;
    }


    if(quote.text.length > 70){
        quoteText.classList.add("quote-long");
    }else{
        quoteText.classList.remove("quote-long");
    }
    quoteText.innerHTML =  quote.text;
}

quoteButton.addEventListener("click",newQuote)
getQuotes();

