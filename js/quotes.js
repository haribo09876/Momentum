const quotes = [
  {
    quote: "The die is cast",
    author: "Julius caesar",
  },
  {
    quote: "Life is either a daring adventure or nothing at all",
    author: "Helen Keller",
  },
  {
    quote: "Life is unfair, get used to it",
    author: "Bill Gates",
  },
  {
    quote: "If you really look closely, most overnight successes took a long time",
    author: "Steve Jobs",
  },
  {
    quote: "The secret of success is to do the common thing uncommonly well",
    author: "John D. Rockefeller Jr.",
  },
  {
    quote: "It is kind of fun to do the impossible",
    author: "Walt Disney",
  },
  {
    quote: "I didn’t get there by wishing for it or hoping for it, but by working for it",
    author: "Estée Lauder",
  },
  {
    quote: "Try not to become a man of success. Rather become a man of value",
    author: "Albert Einstein",
  },  
  {
    quote: "I find that the harder I work, the more luck I seem to have",
    author: "Thomas Jefferson",
  },
  {
    quote: "Tough times never last, but tough people do",
    author: "Robert H. Schuller",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;