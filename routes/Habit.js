const express = require("express");
const router = express.Router();
const c=require("../controller/HabitController");

router.get("",c.getHabits);
router.get("/:id",c.gethabitbyid);
router.post("", c.createHabit);
router.put("/:id", c.updateHabit);
router.delete("/:id", c.deleteHabit);

module.exports = router;