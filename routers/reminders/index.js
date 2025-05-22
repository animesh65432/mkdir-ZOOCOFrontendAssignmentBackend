const express = require("express")
const router = express.Router()
const { createReminder, updateReminder, deleteReminder, getAllReminders, getReminderById, makeremindercompleted } = require("../../controllers/reminder.js")
const { reminderValidation } = require("../../validators/reminderValidator.js")


router.post("/create", reminderValidation, createReminder);
router.get("/getAll", getAllReminders);
router.get("/get/:id", getReminderById);
router.put("/update/:id", reminderValidation, updateReminder);
router.delete("/delete/:id", deleteReminder);
router.put("/complete/:id", makeremindercompleted)

module.exports = router