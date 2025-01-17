const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: false // TODO: Change to true
  },
  year: {
    type: Number
  },
  days: [
    {
      location: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      plans: [
        {
          time: {
            type: String,
            required: true
          },
          description: {
            type: String,
            required: true
          },
          url: {
            type: String
          },
          fileName: {
            type: String
          }
        }
      ]
    }
  ],
});

module.exports = mongoose.model("Itinerary", itinerarySchema);