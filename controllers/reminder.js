const { validationResult } = require("express-validator");
const Reminder = require("../models/Reminders");

const createReminder = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const reminder = new Reminder(req.body);
        await reminder.save();
        res.status(201).json(reminder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllReminders = async (req, res) => {
    try {
        const reminders = await Reminder.find();
        res.status(200).json(reminders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getReminderById = async (req, res) => {
    try {
        const reminder = await Reminder.findById(req.params.id);
        if (!reminder) return res.status(404).json({ error: "Reminder not found" });
        res.status(200).json(reminder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateReminder = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const updated = await Reminder.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updated) return res.status(404).json({ error: "Reminder not found" });
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteReminder = async (req, res) => {
    try {
        const deleted = await Reminder.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Reminder not found" });
        res.status(200).json({ message: "Reminder deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createReminder,
    getAllReminders,
    getReminderById,
    updateReminder,
    deleteReminder,
};
