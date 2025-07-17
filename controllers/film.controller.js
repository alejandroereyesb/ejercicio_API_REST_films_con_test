const fetchFilm = require('../utils/fetchFilms');

const getFilmByTitle = async (req, res) => {
  try {
    const title = req.params.title;
    const film = await fetchFilm(title);
    if (!film) {
      return res.status(404).json({ message: 'Film not found' });
    }
    res.status(200).json(film);
  } catch (error) {
    console.error('Error fetching film by title:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const addFilm = (req, res) => {
  try {
    const { Title } = req.body;
    res.status(200).json({ message: `Se ha guardado ${Title}` });
  } catch (error) {
    console.error('Error adding film:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateFilm = (req, res) => {
  try {
    const { id, Title } = req.body;
    res.status(200).json({ id, message: `Se ha actualizado ${Title}` });
  } catch (error) {
    console.error('Error updating film:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteFilm = (req, res) => {
  try {
    const { id } = req.body;
    res.status(200).json({ id, message: `Se ha borrado la película con ID: ${id}` });
  } catch (error) {
    console.error('Error deleting film:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getFilmByTitle,
  addFilm,
  updateFilm,
  deleteFilm,
};
