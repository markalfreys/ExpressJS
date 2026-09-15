const express = require('express');
const productsRouter = require('./routes/products');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

const app = express();
const port = 8080;

// Read JSON sent in requests.
app.use(express.json());

// Use the product routes.
app.use('/products', productsRouter);

// Handle missing routes and errors last.
app.use(notFound);
app.use(errorHandler);

// Start the server.
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/products`);
});
