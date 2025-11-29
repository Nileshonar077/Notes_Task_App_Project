const service = require("../services/tasksService");

module.exports = {
  async getTasks(req, res, next) {
    try {
      const result = await service.listTasks(req.user.id, req.query);
      res.json({
        success: true,
        meta: {
          total: result.total,
          limit: result.limit,
          offset: result.offset
        },
        data: result.data
      });
    } catch (err) {
      next(err);
    }
  },

  async createTask(req, res, next) {
    try {
      const task = await service.create(req.user.id, req.body);
      res.json({ success: true, data: task });
    } catch (err) {
      next(err);
    }
  },

  async updateStatus(req, res, next) {
    try {
      const task = await service.updateStatus(req.user.id, req.params.id, req.body.status);

      if (!task)
        return res.status(404).json({ success: false, message: "Task not found or not owned" });

      res.json({ success: true, data: task });
    } catch (err) {
      next(err);
    }
  }
};
