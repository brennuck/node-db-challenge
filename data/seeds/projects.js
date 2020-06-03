
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, projects_name: "Finish Sprint", tasks_id:1, resources_id:1 },
        { id: 2, projects_name: "Finish asdfasdfasdfSprint", tasks_id:2, resources_id:2 },
      ]);
    });
};
