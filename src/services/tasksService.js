const Tasks = require("../models/tasksModel");

module.exports = {
  async listTasks(userId, query) {
    const limit = Math.min(parseInt(query.limit) || 10, 50);
    const offset = parseInt(query.offset) || 0;

    const filters = {
      status: query.status || null,
      q: query.q || null,
      limit,
      offset
    };

    const data = await Tasks.getTasks(userId, filters);
    const total = await Tasks.countTasks(userId, filters);

    return { total, ...filters, data };
  },

  async create(userId, body) {
    return Tasks.createTask(userId, body);
  },

  async updateStatus(userId, taskId, status) {
    return Tasks.updateStatus(taskId, userId, status);
  }
};
