const express = require('express'),
  path = require('path');
const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.all('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
