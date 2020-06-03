const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    getProjects,
    getTasks,
    getResources,
    // addProjects,
    // addTasks,
    // addResources
}

function getProjects() {
    return db('projects')
}

function getTasks(id) {
    // return db('projects')
    //     .join('tasks', 'projects.tasks_id', 'tasks.id')
    //     .where('projects.id', '=', id)
    //     .select('projects.projects_name', 'tasks.tasks_desc')
    return db('projects')
        .join()
}

function getResources(id) {
    return db('projects')
        .join('resources', 'projects.resources_id', 'resources.id')
        .where('projects.id', '=', id)
        .select('projects.projects_name', 'resources.resources_name')
}