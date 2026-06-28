const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!res.ok) {
    let message = `Request failed with status ${res.status}`
    try {
      const data = await res.json()
      if (data.error) message = data.error
    } catch {
      // response had no JSON body
    }
    throw new Error(message)
  }

  if (res.status === 204) return null
  return res.json()
}

export const api = {
  getReviews: () => request('/reviews'),
  getReview: (id) => request(`/reviews/${id}`),
  searchReviews: (q) => request(`/reviews/search?q=${encodeURIComponent(q)}`),
  createReview: (data) =>
    request('/reviews', { method: 'POST', body: JSON.stringify(data) }),
  updateReview: (id, data) =>
    request(`/reviews/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteReview: (id) =>
    request(`/reviews/${id}`, { method: 'DELETE' }),
}
