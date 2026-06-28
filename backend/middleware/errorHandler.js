function notFoundHandler(req, res, next) {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl} not found` })
}

function errorHandler(err, req, res, next) {
  console.error(err.stack)
  const status = err.status || 500
  res.status(status).json({ error: err.message || 'Internal server error' })
}

module.exports = { notFoundHandler, errorHandler }
