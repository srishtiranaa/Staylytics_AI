const express = require('express')
const router = express.Router()
const store = require('../data/reviewsStore')

const VALID_SENTIMENTS = ['positive', 'neutral', 'negative']

function validateReviewBody(body) {
  if (!body.guestName || typeof body.guestName !== 'string') {
    return 'guestName is required and must be a string'
  }
  if (!body.text || typeof body.text !== 'string') {
    return 'text is required and must be a string'
  }
  if (body.sentiment && !VALID_SENTIMENTS.includes(body.sentiment)) {
    return `sentiment must be one of: ${VALID_SENTIMENTS.join(', ')}`
  }
  return null
}

// GET /api/reviews/search?q=... — search reviews
// NOTE: defined before /:id so "search" is not parsed as an :id param
router.get('/search', (req, res) => {
  const q = req.query.q
  if (!q) {
    return res.status(400).json({ error: 'Query parameter "q" is required' })
  }
  const results = store.search(q)
  res.status(200).json(results)
})

// GET /api/reviews — list all reviews
router.get('/', (req, res) => {
  res.status(200).json(store.getAll())
})

// GET /api/reviews/:id — get a single review
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const review = store.getById(id)
  if (!review) {
    return res.status(404).json({ error: `Review with id ${id} not found` })
  }
  res.status(200).json(review)
})

// POST /api/reviews — create a review
router.post('/', (req, res) => {
  const validationError = validateReviewBody(req.body)
  if (validationError) {
    return res.status(400).json({ error: validationError })
  }
  const newReview = store.create({
    guestName: req.body.guestName,
    text: req.body.text,
    sentiment: req.body.sentiment || 'neutral',
    date: req.body.date || new Date().toISOString().slice(0, 10),
  })
  res.status(201).json(newReview)
})

// PUT /api/reviews/:id — update a review
router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const existing = store.getById(id)
  if (!existing) {
    return res.status(404).json({ error: `Review with id ${id} not found` })
  }
  if (req.body.sentiment && !VALID_SENTIMENTS.includes(req.body.sentiment)) {
    return res.status(400).json({ error: `sentiment must be one of: ${VALID_SENTIMENTS.join(', ')}` })
  }
  const updated = store.update(id, req.body)
  res.status(200).json(updated)
})

// DELETE /api/reviews/:id — delete a review
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  const deleted = store.remove(id)
  if (!deleted) {
    return res.status(404).json({ error: `Review with id ${id} not found` })
  }
  res.status(204).send()
})

module.exports = router
