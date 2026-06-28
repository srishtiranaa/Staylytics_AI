require('dotenv').config()
const express = require('express')
const cors = require('cors')

const reviewsRouter = require('./routes/reviews')
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 5000
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173'

app.use(cors({ origin: FRONTEND_ORIGIN }))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Staylytics AI backend is running' })
})

app.use('/api/reviews', reviewsRouter)

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Staylytics AI backend listening on http://localhost:${PORT}`)
})
