// Express needs all four parameters to recognize an error handler.
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Please send valid JSON.' });
  }

  if (err.type === 'entity.too.large') {
    return res.status(413).json({ error: 'The request body is too large.' });
  }

  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong. Please try again.' });
}

module.exports = errorHandler;
