
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, resources_name: "computer", },
        { id: 2, resources_name: "mac", resources_desc: "the best computer on this planet" }
      ]);
    });
};
