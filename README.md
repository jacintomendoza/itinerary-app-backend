# Itinerary-app-backend

## Description
CRUD app for https://github.com/jacintomendoza/itinerary-app

## Getting Started
1. Clone the repository: git clone https://github.com/<username>/itinerary-backend.git
2. Navigate to the root directory: cd itinerary-backend
3. Install dependencies: npm install
4. In Netilify, add your MongoDB Atlas connection string: MONGO_URL=mongodb+srv://<username>:<password>.....
5. Deploy the app to Netlify: netlify deploy
6. Test the CRUD operations using a tool like Postman

## API Endpoints
The following endpoints are available for interacting with the MongoDB database:

- POST /api/itinerary: Create a new itinerary
- GET /api/itinerary: Get a list of all itinerary
- GET /api/itinerary/:id: Get a single itinerary by its ID
- PUT /api/itinerary/:id: Update a itinerary by its ID
- DELETE /api/itinerary/:id: Delete a itinerary by its ID

## Dependencies
- MongoDB Atlas
- Netlify Functions
- Mongoose: MongoDB