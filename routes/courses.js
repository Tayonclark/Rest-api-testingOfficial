const Joi = require("joi");
const courseController = require('../controllers/courses');

module.exports = [
  {
    method: "GET",
    path: "/courses/{subject}",
    options: {
      validate: {
        params: Joi.object({
          subject: Joi.string().required()
        })
      },      
      handler: (request, h) => courseController.getCoursesBySubject(request, h)
    }
  },
  
  {
    method: "GET",
    path: "/gened/{category}",
    options: {
      validate: {
        params: Joi.object({
          category: Joi.string().required()
        })
      },    
      handler: courseController.getGenEdCoursesByCategory
    }
  }
];
