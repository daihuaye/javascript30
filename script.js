const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  let regex = new RegExp(wordToMatch, 'gi');
  return cities.filter(data => {
    return data.city.match(regex) || data.state.match(regex);
  });
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matches = findMatches(this.value, cities);
  const html = matches.map(match => {
    let regex = new RegExp(this.value, 'gi');
    let cityName = match.city.replace(regex, `<span class="hl">${this.value}</span>`);
    let stateName = match.state.replace(regex, `<span class="hl">${this.value}</span>`);
    
    return `
    <li>
      <span>${cityName}, ${stateName}</span>
      <span>${numberWithCommas(match.population)}</span>
    </li>`;
  }).join('');
  suggestions.innerHTML = html;
}

const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

input.addEventListener('change', displayMatches);
input.addEventListener('keyup', displayMatches);