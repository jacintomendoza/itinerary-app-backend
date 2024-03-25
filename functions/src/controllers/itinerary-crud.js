/** @format */
const handleRequest = require("../utils/request");
const Itinerary = require("../models/itinerary-model");

const postItinerary = handleRequest(async (body) => {
  const newModel = new Itinerary(body);
  return await newModel.save();
});

const getItinerary = handleRequest(async () => {
  const datas = await Itinerary.find();
  return datas;
});

const getItineraryById = handleRequest(async (body, id) => {
  const data = await Itinerary.findById(id);
  if (!data) throw new Error("Itinerary not found");
  return data;
});

// const putItineraryById = handleRequest(async (body, id) => {
//   const data = await Itinerary.findByIdAndUpdate(id, body, {
//     new: true,
//   });
//   if (!data) throw new Error("Itinerary not found");
//   return data;
// });

const deleteItineraryById = handleRequest(async (body, id) => {
  const data = await Itinerary.findByIdAndDelete(id);
  if (!data) throw new Error("Itinerary not found");
  return data;
});

module.exports = {
  postItinerary,
  getItinerary,
  getItineraryById,
  // putItineraryById,
  deleteItineraryById,
};