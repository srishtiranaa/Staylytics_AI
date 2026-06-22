# Staylytics AI — Frontend

React component library and Dashboard page for Week 3 of the SIP 2026 internship, matching the Figma wireframes.

## Run locally

```
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Component library

All reusable components live in `src/components/`:

| Component | Purpose |
|---|---|
| `Button` | Primary/secondary/ghost/danger button, 3 sizes |
| `Card` | Generic white surface container used by every panel |
| `StatCard` | Dashboard metric card (label + big value + trend) |
| `SentimentBadge` | Colored pill for positive/negative/neutral sentiment |
| `ReviewRow` | Single row in the recent-reviews list |
| `ReviewsTable` | Full reviews table, collapses to stacked cards on mobile |
| `Tag` | Pill label for review themes (e.g. #cleanliness) |
| `UploadBox` / `PasteBox` | CSV drag-drop and paste-to-add review inputs |
| `Input` | Labeled text input used in forms |
| `Toggle` | Switch control used in Settings |
| `Sidebar` | Left navigation, collapses to icon rail on tablet, horizontal bar on mobile |
| `Topbar` | Page title bar with avatar |
| `AppLayout` | Shared page shell (Sidebar + Topbar + content slot) used by every screen |
| `TrendChart` | Lightweight inline SVG line chart, no external chart library |
| `BarChart` | Lightweight inline SVG bar chart, no external chart library |

## Pages

Routed with `react-router-dom`:

| Route | Page | Matches wireframe |
|---|---|---|
| `/` | Dashboard | 02-Dashboard |
| `/reviews` | Reviews | 03-Review-Upload-List |
| `/analytics` | Analytics | 05-Analytics-Insights |
| `/settings` | Settings | (new, not in original 5 wireframes) |

## Responsive breakpoints

- Desktop: full sidebar + 4-column stat grid
- Tablet (≤1024px): icon-only sidebar, 2-column stat grid, stacked charts
- Mobile (≤640px): horizontal top nav, 1-column stat grid, wrapped review rows
