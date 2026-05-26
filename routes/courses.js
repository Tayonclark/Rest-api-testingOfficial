const Joi = require("joi");
const courseController = require('../controllers/courses');

module.exports = [
  {
    method: "GET",
    path: "/courses/{subject}",
    options: {
      validate: {
        params: joi.object({
          subject: joi.string().required()
        })
      },      
      handler: coursesController.getCoursesBySubject
    }
  },
  
  {
    method: "GET",
    path: "/gened/{category}",
    options: {
      validate: {
        params: joi.object({
          category: joi.string().required()
        })
      },    
      handler: coursesController.getGenEdCoursesByCategory
    }
  }
];
