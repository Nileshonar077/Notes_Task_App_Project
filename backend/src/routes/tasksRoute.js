const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/tasksController");

router.get("/", ctrl.getTasks);
router.post("/", ctrl.createTask);
router.patch("/:id/status", ctrl.updateStatus);

module.exports = router;
