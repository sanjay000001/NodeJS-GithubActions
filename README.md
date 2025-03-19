# Node.js Server with GitHub Actions Change133 ABC

A basic Node.js Express server with GitHub Actions workflow for CI/CD and artifact storage.

## Features

- Express.js REST API
- Jest testing framework
- GitHub Actions workflow
- Artifact generation and storage

## Setup

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the server: `npm start`
4. Run tests: `npm test`

## GitHub Actions

The workflow will:
1. Run tests on push/pull request to main branch
2. Generate test artifacts
3. Create a build artifact
4. Store both artifacts for 5 days

## API Endpoints

- `GET /`: Returns a welcome message
- `GET /api/data`: Returns sample data with timestamp
