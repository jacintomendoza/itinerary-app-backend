/** @format */
const handleRequest = require("../utils/request");
const Itinerary = require("../models/itinerary-model");
const { v4: uuidv4 } = require('uuid');

function generateUniqueId() {
  return uuidv4();
}

// CREATE
const postItinerary = handleRequest(async (body) => {
  const newModel = new Itinerary(body);
  return await newModel.save();
});

// READ
const getItinerary = handleRequest(async () => {
  const datas = await Itinerary.find();
  return datas;
});

const getItineraryById = handleRequest(async (body, id) => {
  const data = await Itinerary.findById(id);
  if (!data) throw new Error("Itinerary not found");
  return data;
});

// UPDATE
const putItineraryById = handleRequest(async (body, id) => {
  const data = await Itinerary.findByIdAndUpdate(id, body, {
    new: true,
  });
  if (!data) throw new Error("Itinerary not found");
  return data;
});

const putDayByItineraryId = handleRequest(async (body, id) => {
  const itinerary = await Itinerary.findById(id);
  if (!itinerary) throw new Error("Itinerary not found");

  const newDayId = generateUniqueId();
  body.id = newDayId;

  itinerary.days.push(body);
  await itinerary.save();

  return itinerary;
});

const putPlanByDayId = handleRequest(async (body, id) => {
  const itinerary = await Itinerary.findOne({ "days.id": id });
  console.log("Query:", { "days.id": id });
  console.log("Result:", itinerary);
  if (!itinerary) throw new Error("Itinerary not found");

  const day = itinerary.days.find(day => day.id === id);
  if (!day) throw new Error("Day not found");

  day.plans.push(body);
  await itinerary.save();

  return itinerary;
});

// DELETE
const deleteItineraryById = handleRequest(async (body, id) => {
  const data = await Itinerary.findByIdAndDelete(id);
  if (!data) throw new Error("Itinerary not found");
  return data;
});

module.exports = {
  postItinerary,
  getItinerary,
  getItineraryById,
  putItineraryById,
  putDayByItineraryId,
  putPlanByDayId,
  deleteItineraryById,
};