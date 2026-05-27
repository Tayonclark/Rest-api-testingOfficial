const Joi = require('@hapi/joi');
const MenuController = require('../controllers/menu');

module.exports = [
  {
    method: 'GET',
    path: '/menu',
    options: {
        validate: {
            query: Joi.object({
                name: Joi.string().optional(),
            })
        }
    },
    handler: (request, h) => MenuController.getMenu(request, h),
  }
];