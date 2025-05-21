const { body } = require("express-validator");

const reminderValidation = [
    body("pet").notEmpty().withMessage("Pet is required"),
    body("category").isIn(["General", "Lifestyle", "Health"]).withMessage("Invalid category"),
    body("title").notEmpty().withMessage("Title is required"),
    body("startDateTime").isISO8601().toDate().withMessage("Invalid start date"),
    body("endDateTime").isISO8601().toDate().withMessage("Invalid end date"),
    body("frequency").isIn(["Once", "Daily", "Weekly", "Monthly"]).withMessage("Invalid frequency"),
    body("ReminderTime").isISO8601().toDate().withMessage("Invalid reminder time"),
];

module.exports = { reminderValidation };
