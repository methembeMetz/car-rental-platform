# Car Rental Platform MVP

This repository contains the initial MVP for a local-market car rental platform that serves both customers and rental companies.

## Product vision
A marketplace where customers can search, compare, and book rental cars online while rental companies manage inventory, pricing, and bookings from a dashboard.

## User roles
- Customer
- Rental company
- Admin

## MVP included
- REST API with vehicle listing and booking flow
- Web app with vehicle search and booking UI
- Mobile app starter for Android/iOS
- Shared monorepo structure for future expansion

## Tech stack
- Web app: React + Vite
- API: Node.js + Express
- Mobile app: React Native + Expo
- Database: PostgreSQL (planned for production)
- Payment integration: Stripe (planned for production)
- Auth: JWT + roles (planned for production)

## Repository structure
- `apps/api` — backend API
- `apps/web` — customer web app
- `apps/mobile` — mobile app starter

## Getting started

1. Install dependencies at the root:
   ```bash
   npm install
   ```

2. Start the API:
   ```bash
   npm run dev:api
   ```

3. Start the web app:
   ```bash
   npm run dev:web
   ```

4. Start the mobile app:
   ```bash
   npm run dev:mobile
   ```

## API endpoints
- `GET /api/health` — health check
- `GET /api/vehicles` — list available vehicles
- `GET /api/vehicles/:id` — fetch a single vehicle
- `POST /api/bookings` — create a booking

## MVP roadmap
- Vehicle catalog and filters
- Booking reservation flow
- Payment processing
- Auth and role-based access
- Company dashboard
- Notifications and reminders
- Reviews and ratings
- Admin management

## Notes
This is an MVP foundation, designed to be extended into a production-ready local marketplace.
