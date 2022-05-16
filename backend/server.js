import express from 'express'; // get access to express package
import cors from 'cors';
import data from './data.js'; // to bring data from data.js file
const app = express(); // run express that returns our web app

app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products); // for sending data to the client
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found!' });
  }
  res.send();
});

app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});
