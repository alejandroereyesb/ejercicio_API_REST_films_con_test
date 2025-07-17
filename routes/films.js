const express = require('express');
const {
  getFilmByTitle,
  addFilm,
  updateFilm,
  deleteFilm,
} = require('../controllers/film.controller');

const router = express.Router();

router.get('/:title', getFilmByTitle);
router.post('/', addFilm);
router.put('/', updateFilm);
router.delete('/', deleteFilm);

module.exports = router;
