const pool = require("./db");

module.exports = {
  async getTasks(userId, filters) {
    const { status, q, limit, offset } = filters;

    let query = `SELECT * FROM Tasks WHERE user_id = $1`;
    const params = [userId];
    let paramIndex = 2;

    if (status) {
      query += ` AND status = $${paramIndex++}`;
      params.push(status);
    }

    if (q) {
      query += ` AND title ILIKE $${paramIndex++}`;
      params.push(`%${q}%`);
    }

    query += ` LIMIT ${limit} OFFSET ${offset}`;

    const result = await pool.query(query, params);
    return result.rows;
  },

  async countTasks(userId, filters) {
    const { status, q } = filters;

    let query = `SELECT COUNT(*) AS total FROM Tasks WHERE user_id = $1`;
    const params = [userId];
    let paramIndex = 2;

    if (status) {
      query += ` AND status = $${paramIndex++}`;
      params.push(status);
    }

    if (q) {
      query += ` AND title ILIKE $${paramIndex++}`;
      params.push(`%${q}%`);
    }

    const result = await pool.query(query, params);
    return parseInt(result.rows[0].total);
  },

  async createTask(userId, { title, description }) {
    const result = await pool.query(
      `INSERT INTO Tasks (user_id, title, description, status)
       VALUES ($1, $2, $3, 'OPEN')
       RETURNING *`,
      [userId, title, description || null]
    );
    return result.rows[0];
  },

  async updateStatus(taskId, userId, status) {
    const result = await pool.query(
      `UPDATE Tasks
       SET status = $1
       WHERE id = $2 AND user_id = $3
       RETURNING *`,
      [status, taskId, userId]
    );

    return result.rows[0]; // undefined → not found
  }
};
