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

POST
- /api/itinerary/postItinerary: Create a new itinerary

GET
- /api/itinerary/getItinerary: Get a list of all itinerary
- /api/itinerary/getItineraryById/:id: Get a single itinerary by its ID

PUT
- /api/itinerary/putItineraryById/:id: Update a itinerary by its ID
- /api/itinerary/putDayByItineraryId/:id: Update a itinerary day by its ID
- /api/itinerary/putPlanByDayId/:id: Update a itinerary plan by its ID

DELETE
- /api/itinerary/deleteItineraryById/:id: Delete a itinerary by its ID

## Dependencies
- MongoDB Atlas
- Netlify Functions
- Mongoose: MongoDB

## Netlify Commands
- netlify deploy --prod