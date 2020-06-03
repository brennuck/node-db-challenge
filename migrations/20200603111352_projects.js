
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('projects_name', 256)
            .unique()
            .notNullable();
        tbl.string('projects-desc', 256)
        tbl.boolean('projects_completed').defaultTo(false)
        tbl.integer('tasks_id')
            .references('id')
            .inTable('tasks')
            .unsigned()
            .notNullable();
        tbl.integer('resources_id')
            .references('id')
            .inTable('resources')
            .unsigned()
            .notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('tasks_desc', 256)
            .notNullable()
            .unique()
        tbl.text('tasks_notes', 256)
        tbl.boolean('tasks_completed').defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resources_name', 256)
            .unique()
            .notNullable()
        tbl.string('resources_desc', 256)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
};