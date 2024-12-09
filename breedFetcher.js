const needle = require('needle');
const breedName = process.argv[2];

// Function to fetch breed data
const fetchBreed = (breedName, callback) => {
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

// Example usage: Fetching the breed description
fetchBreed(breedName, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});

