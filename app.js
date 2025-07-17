const express = require('express');
const filmsRoutes = require('./routes/films');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/film', filmsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Film not found' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;