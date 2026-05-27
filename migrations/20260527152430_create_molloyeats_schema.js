exports.up = async function(knex) {
  return knex.schema.withSchema('molloyeats').createTable('menu', (table) =>{
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').nullable();
    table.decimal('price', 10, 2).notNullable();
  }).catch((error) => {
    console.error('Error creating menu table:', error);
  });
};

exports.down = function(knex) {
  return knex.schema.withSchema('molloyeats').dropTableIfExists('menu')
    .catch((error) => {
      console.error('Error dropping menu table:', error);
    });
};