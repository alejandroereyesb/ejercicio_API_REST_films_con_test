const dotenv = require('dotenv');
dotenv.config();

const fetchFilm = async (title) => {
  try {    
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.API_KEY}`);
    const data = await response.json();
    if (data.Response === 'False') {
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching film:', error.message);
    return null;
  }
};

module.exports = fetchFilm;
