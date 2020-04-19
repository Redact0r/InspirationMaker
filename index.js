/* eslint-disable no-undef */
/* eslint-disable strict */


function getListener(event) {
  event.preventDefault();
  url = 'https://api.forismatic.com/api/1.0/?&origin=*&method=getQuote&lang=en&format=json';
  getQuote(url);
}

function getQuote(url) {
  fetch(url, {mode: 'no-cors'})
    .then(response => response.json())
    .then(data => printData(data));
}

function printData(data) {
  console.log(data);
}