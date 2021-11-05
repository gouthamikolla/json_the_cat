const request = require('request');

/*
const handleResponse = (error, response, body) => {
  
  if (error) {
    console.log(error);
  } else {
    //console.log(typeof body);
  //console.log(response);
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data[0].description);
      console.log(typeof data);
    } else {
      console.log('Breed Not FOUND!');
    }
  }
  
};
*/

const fetchBreedDescription = (breedName, callback) => {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

  request(url + breedName , (error, response, body) => {
    if (error) {
      callback(error,null);
    } else {
      const data = JSON.parse(body);
      error = data.length > 0 ? null : "Breed Not FOUND.";
      const description = data.length > 0 ? data[0].description : null;
      callback(error,description);
    }
  });
};

module.exports = {fetchBreedDescription};