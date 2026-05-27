const fs = require('fs');
const path = require('path');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  const jsonPath = path.join(__dirname, 'menu.json');
  const rawData = fs.readFileSync(jsonPath, 'utf8');
  const menuData = JSON.parse(rawData);
  await knex('molloyeats.menu').del();
  await knex('molloyeats.menu').insert(menuData);
};
