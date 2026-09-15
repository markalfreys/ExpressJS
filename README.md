# Express Products API

The final assignment from Express.js Tutorial.docx: list products and add a product using Express.

## Run

From the workspace terminal:

```powershell
cd "ExpressJS"
npm install
npm start
```

Open http://localhost:8080/products to see the products. Press Ctrl+C in the terminal to stop the server.

Products are kept in an array. Added products disappear when you restart the server.

## Test with Postman

Keep the server running. Import `products.postman_collection.json` into Postman, or create these requests yourself:

1. Send **GET** to `http://localhost:8080/products`. You should get status **200** and the starting products, Notebook and Pen.
2. Send **POST** to the same URL. Choose **Body > raw > JSON** and enter:

```json
{
  "name": "Mouse",
  "price": 20
}
```

You should get status **201** and the new product:

```json
{
  "id": 3,
  "name": "Mouse",
  "price": 20
}
```

3. Send **GET** again. Pencil should now be in the list.
4. Try an empty name or a negative price. You should get status **400** with a short error message.

Each successful POST adds another product. The ID above assumes this is the first addition after starting the server.

## Project files

```text
express-tutorial/
  app.js
  routes/
    products.js
  middleware/
    not-found.js
    error-handler.js
```

- `app.js` connects the routes and middleware, then starts the server.
- `routes/products.js` stores the products and handles GET and POST requests.
- `middleware/not-found.js` handles missing routes.
- `middleware/error-handler.js` handles request and server errors.



## Error handling

Errors return JSON with an `error` message:

- **400**: Invalid product details or invalid JSON.
- **404**: The requested route does not exist.
- **413**: The request body is too large.
- **500**: An unexpected server error. Details are logged in the terminal.

In Postman, try sending `{"name": }` as raw JSON to `POST /products`. You should get **400** and `Please send valid JSON.` Try `GET /missing` to see the **404** response.


