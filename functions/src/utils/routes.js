/** @format */

const { connect, close } = require("./db");
const Status = require("./status");
const controllers = require("../controllers/index");

let _client;
exports.handler = async (event, context, callback) => {
  // Destructure the event object to get the HTTP method and path
  let { httpMethod, path, body, headers } = event;
  // Call getControllerAndMethod to get the controller and method for the request
  const { controller, method, id } = getControllerAndMethod(path, httpMethod, headers);

  if (!controller) return Status.NotFound();
  if (!method) return Status.Error("Method Not Allowed", 405);
  if (body) body = JSON.parse(body);

  try {
    // Connect to the database
    await connect(_client);
    // Call the method on the controller
    let x = await controller[method](body, id);
    console.log(x);
    return x;
  } finally {
    // Close the database connection after the request has completed
    await close(_client);
  }
};

const PATH_REGEX = /^\/(\w+)(?:\/(\w+))(?:\/([\w-]+))?/;

const getControllerAndMethod = (path, httpMethod, headers) => {
  // Extract the resource, id, and action from the path
  const [, resource, action, id] = path.replace("/api", "").match(PATH_REGEX);
  // Get the controller for the given resource
  const controller = controllers[`${resource}Controller`];

  if (!controller) {
    return {
      controller: undefined,
      method: undefined,
    };
  }

  if (id) {
    return {
      controller,
      method: action,
      id
    };
  } else {
    return {
      controller,
      method: action,
    };
  }
};
