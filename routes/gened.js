const Joi = require("@hapi/hapi");

module.exports = [
  {
    method: "GET",
    path: "/courses/{category}",
    handler: (request, h) => {
      return request.params.category;
    },
  },
];
