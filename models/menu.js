const Joi = require('@hapi/joi'); 
const menuController = require('../controllers/menu');

module.exports = [
  {
    method: 'GET',
    path: '/menu',
    options: {
      validate: {
        query: Joi.object({
          name: Joi.string().optional()
        })
      }
    },
    handler: menuController.getMenu
  },

  {
    method: 'POST',
    path: '/menu/add',
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          price: Joi.number().required(),
          description: Joi.string().optional()
        })
      }
    },
    handler: menuController.addItem
  },

  {
    method: 'DELETE',
    path: '/menu/remove',
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required()
        })
      }
    },
    handler: menuController.removeItem
  },

  {
    method: 'PUT',
    path: '/menu/update',
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          price: Joi.number().required(),
          description: Joi.string().optional()
        })
      }
    },
    handler: menuController.updateItem
  }
];
