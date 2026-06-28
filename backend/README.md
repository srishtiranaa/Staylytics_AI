# Staylytics AI — Backend

Express.js REST API for the Staylytics AI reviews dashboard. Week 4 of the SIP 2026 internship.

## How to run backend locally

```
cd backend
npm install
cp .env.example .env
npm run dev
```

The server starts on `http://localhost:5000` (or whatever `PORT` is set to in `.env`).

`npm run dev` uses nodemon to auto-restart on file changes. Use `npm start` for a one-off run without auto-reload.

## Environment variables

See `.env.example`:

| Variable | Purpose |
|---|---|
| `PORT` | Port the server listens on (default 5000) |
| `FRONTEND_ORIGIN` | Allowed CORS origin for the frontend (default `http://localhost:5173`) |

## Endpoints

| Method | Path | Description | Success status |
|---|---|---|---|
| GET | `/api/reviews` | List all reviews | 200 |
| GET | `/api/reviews/:id` | Get a single review by id | 200 |
| GET | `/api/reviews/search?q=...` | Search reviews by guest name or text | 200 |
| POST | `/api/reviews` | Create a new review | 201 |
| PUT | `/api/reviews/:id` | Update an existing review | 200 |
| DELETE | `/api/reviews/:id` | Delete a review | 204 |

Validation errors return `400`. Missing resources return `404`. Unhandled errors return `500`.

## Data model

```json
{
  "id": 1,
  "guestName": "Aanya Kapoor",
  "text": "Loved the rooftop view and warm hospitality",
  "sentiment": "positive",
  "date": "2026-06-18"
}
```

`sentiment` must be one of `positive`, `neutral`, `negative`.

Data is stored in-memory (`data/reviewsStore.js`) and resets whenever the server restarts. A real database is introduced in Week 5.
