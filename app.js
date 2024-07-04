const axios = require('axios');
const { log } = require('console');

async function getPeople() {
  const response = await axios.get('https://swapi.dev/api/people');
  return response.data.results;
}

getPeople().then((people) => {
  people.forEach((person) => {
    console.log(person.name);
  });
});

axios
  .get('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    console.log('Data received:', response.data);
  })
  .catch((error) => {
    if (error.response) {
      console.error(`HTTP error: ${error.response.status}`);
    } else if (error.request) {
      console.error('Request error: No response received');
    } else {
      console.error('Error:', error.message);
    }
  });

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    if (!response.ok) {
      throw Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Data received:', data);
  })
  .catch((error) => {
    console.error('Error message:', error.message);
  });
