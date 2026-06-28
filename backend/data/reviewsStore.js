// In-memory data store. Replaced with a real database in Week 5.
let reviews = [
  {
    id: 1,
    guestName: 'Aanya Kapoor',
    text: 'Loved the rooftop view and warm hospitality',
    sentiment: 'positive',
    date: '2026-06-18',
  },
  {
    id: 2,
    guestName: 'Marcus Webb',
    text: 'Room was clean but check-in took too long',
    sentiment: 'neutral',
    date: '2026-06-17',
  },
  {
    id: 3,
    guestName: 'Priya Singh',
    text: 'Wifi kept disconnecting throughout the stay',
    sentiment: 'negative',
    date: '2026-06-16',
  },
  {
    id: 4,
    guestName: 'Daniel Ortiz',
    text: 'Best homestay experience in the city so far',
    sentiment: 'positive',
    date: '2026-06-14',
  },
]

let nextId = 5

function getAll() {
  return reviews
}

function getById(id) {
  return reviews.find((r) => r.id === id)
}

function create(data) {
  const newReview = { id: nextId++, ...data }
  reviews.push(newReview)
  return newReview
}

function update(id, data) {
  const index = reviews.findIndex((r) => r.id === id)
  if (index === -1) return null
  reviews[index] = { ...reviews[index], ...data }
  return reviews[index]
}

function remove(id) {
  const index = reviews.findIndex((r) => r.id === id)
  if (index === -1) return false
  reviews.splice(index, 1)
  return true
}

function search(query) {
  const q = query.toLowerCase()
  return reviews.filter(
    (r) =>
      r.guestName.toLowerCase().includes(q) ||
      r.text.toLowerCase().includes(q)
  )
}

module.exports = { getAll, getById, create, update, remove, search }
