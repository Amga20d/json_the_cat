const needle = require('needle');

// Function to fetch breed data
const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (error, response) => {
    if (error) {
      callback('Request Failed', null);
      return;
    }
    
    const breed = response.body[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback('Breed Not Found', null);
    }
  });
};


module.exports = { fetchBreedDescription };
