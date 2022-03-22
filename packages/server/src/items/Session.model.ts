const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
    filmName: { type: String, required: true },
    filmDescription: { type: String },
    supervisor: { type: String, required: true },
    theatre: { type: String, required: true },
    date: { type: Date, required: true },
    duration: { type: String, required: true },
    status: { type: String, required: true }
});

const Session = mongoose.model("Session", SessionSchema)
module.exports = Session;
