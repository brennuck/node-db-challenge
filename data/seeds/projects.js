
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, projects_name: "Finish Sprint", projects_desc: "Complete seeding n stuff", tasks_id:1, resources_id:1 },
        { id: 2, projects_name: "Finish asdfasdfasdfSprint", projects_desc: "Complete ssdfsdfeeding n stuff", tasks_id:2, resources_id:2 },
      ]);
    });
};
