
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, tasks_desc: "Copmleteasd;lkfja;sldkfj;laksj", tasks_notes: "this better work", tasks_completed: false },
        { id: 2, tasks_desc: ";alskdjf;alksdfj", tasks_notes: "cmon baby", tasks_completed: true }
      ]);
    });
};
