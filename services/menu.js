const Menu = require('../models/menu');

class MenuService {
    async getMenu(name = '') {
        return await Menu.query()
            .select('name', 'price', 'description')
            .where('name', 'ilike', `%${name}%`)
            .orderBy('description', 'ilike', `%${name}%`);
    }

    async addItem(name, price, description) {
        const existingItem = await Menu.query()
            .whereRaw('LOWER(name) = ?', [name.toLowerCase()])
            .first();
        if (!existingItem) {
            return await Menu.query().insert({name, price, description}); 
        }
        return false;
    }

    async removeItem(name) {
        return await Menu.query()
            .whereRaw('LOWER(name) = ?', [name.toLowerCase()])
            .del();
    }

    async updateItem(name, price, description) {
        return await Menu.query()
            .whereRaw('LOWER(name) = ?', [name.toLowerCase()])
            .patch({ price, description });
    }
}

module.exports = new MenuService();