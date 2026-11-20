const express = require('express');

const app = express();
const products = [
  { id: 1, name: 'Trail Bike', brand: 'Trek' },
  { id: 2, name: 'City Bike', brand: 'Giant' },
  { id: 3, name: 'Road Bike', brand: 'Trek' }
];

app.get('/', (req, res) => {
  res.type('text').send('Express HTTP server - Lab 5');
});

app.get('/products/:brand', (req, res) => {
  res.json(products.filter(product => product.brand === req.params.brand));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on port ' + port));
