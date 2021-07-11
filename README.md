# PreciseSchedule

This project is a refactor of an old personal project. There is nothing special about it.

It is a monorepo with backend written in _NestJS_ and frontend written in _React_.

## TODO

### General

- Token validation
- WebVitals
- Better password validations
- A.I.

### CRUDs

- Users
- Events
- Charts
- Reports

### Frontend

- Better UI design
- Mobile / Responsive design
- Uncontrolled inputs

### Backend

- Swap CORS by reverse proxy
- Mongo

## Structure

- `Components`
- `Core`
- `Domains`

  - a domain is a functionality, usually `duck` + `sagas` + `api requests`

- `Pages`
- `Setup`
- `Store`
  - setup the store
