/** @format */
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "*"
  // "Access-Control-Allow-Headers": "Content-Type, XMLHttpRequest, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers, X-Auth-Token",
  // "Content-Type": "application/json",
  // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
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
};
