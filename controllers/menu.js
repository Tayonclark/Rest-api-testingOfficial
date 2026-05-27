const menuService = require('../services/menu');

class MenuController {
  static async getMenu(request, h) {
    try {
      const name = request.query.name; 
      const result = await menuService.getMenu(name);
      return result;
    } catch (err) {
      return h.response({ error: err.message }).code(500);
    }
  }

  static async addItem(request, h) {
    try {
      const { name, price, description } = request.payload;
      const result = await menuService.addItem(name, price, description);
      
      if (result === false) {
        return h.response({ error: "A menu item with that name already exists" }).code(400);
      }
      return result;
    } catch (err) {
      return h.response({ error: err.message }).code(500);
    }
  }

  static async removeItem(request, h) {
    try {
      const { name } = request.payload;
      const rowsDeleted = await menuService.removeItem(name);
      
      if (rowsDeleted === 0) {
        return h.response({ error: "An item with that name does not exist" }).code(404);
      }
      return { message: `${rowsDeleted} row(s) removed successfully.` };
    } catch (err) {
      return h.response({ error: err.message }).code(500);
    }
  }

  static async updateItem(request, h) {
    try {
      const { name, price, description } = request.payload;
      const rowsUpdated = await menuService.updateItem(name, price, description);
      
      if (rowsUpdated === 0) {
        return h.response({ error: "An item with that name does not exist" }).code(404);
      }
      return { message: `${rowsUpdated} row(s) updated successfully.` };
    } catch (err) {
      return h.response({ error: err.message }).code(500);
    }
  }
}

module.exports = MenuController;
