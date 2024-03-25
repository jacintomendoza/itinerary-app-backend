const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number
  },
  days: [
    {
      id: {
        type: Number,
        required: true
      },
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
          }
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Itinerary", itinerarySchema);