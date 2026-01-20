const Joi = require("@hapi/hapi");

module.exports = [
  {
    method: "GET",
    path: "/courses/{subject}",
    handler: (request, h) => {
      return request.params.subject;
    },
  },
  {
    method: "GET",
    path: "/courses/credits/{number}",
    handler: (request, h) => {
      return request.params.number;
    },
  },
];
