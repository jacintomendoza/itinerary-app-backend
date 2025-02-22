/** @format */
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "*"
};

const Options = () => {
  return {
    statusCode: 204, // No content for OPTIONS request
    body: "",
    headers,
  };
};

const Success = (data, statusCode = 200) => {
  return {
    statusCode,
    body: JSON.stringify(data),
    headers,
  };
};
const NotFound = (errorMessage = "Not Found", statusCode = 404) => {
  return {
    statusCode,
    body: JSON.stringify(errorMessage),
    headers,
  };
};
const Error = (errorMessage, statusCode = 500) => {
  return {
    statusCode,
    body: JSON.stringify(errorMessage),
    headers,
  };
};

module.exports = {
  Success,
  Error,
  NotFound,
  Options
};
