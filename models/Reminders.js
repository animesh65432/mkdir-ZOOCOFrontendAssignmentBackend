const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
    pet: {
        type: String,
        required: true,
        enum: ['Browny', 'Cat', 'Bird', 'Other'],
    },
    category: {
        type: String,
        required: true,
        enum: ['General', 'Lifestyle', 'Health'],
    },
    title: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        default: "",
    },
    startDateTime: {
        type: Date,
        required: true,
    },
    endDateTime: {
        type: Date,
        required: false,
    },
    frequency: {
        type: String,
        required: true,
        enum: ['Once', 'Daily', 'Weekly', 'Monthly'],
    },
    ReminderTime: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
});

const Reminder = mongoose.model("Reminder", reminderSchema);

module.exports = Reminder;
