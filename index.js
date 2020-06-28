/* eslint-disable no-undef */
/* eslint-disable strict */


function getListener(event) {
  event.preventDefault();
  url = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  getQuote(url);
}

function getQuote(url) {
  printPic().then(
  fetch(url)
    .then(response => { 
      if (!response.ok) {
        throw new Error(reponse.status);
      } else {
        response.json()
          .then(data => printQuote(data));
      } 
    }))
    
    .catch(err => console.log(err));
}

function clearResults() {
  results = document.getElementById('results');
  results.innerHTML = '';
}

function printQuote(data) {
  const quote = data.quoteText;
  let html = `<p>${quote}</p>`;
  const textDiv = document.createElement('div');
  const results = document.getElementById('results');
  textDiv.classList.add('quote');
  clearResults();
  results.appendChild(textDiv);
  textDiv.innerHTML = html;

}

function printPic() {
  let pic = document.createElement('IMG');
  let random = Math.random(1, 10);
  pic.src = `https://picsum.photos/500/500?grayscale&random=${random}`;
  results = document.getElementById('results');
  results.appendChild(pic);

}
