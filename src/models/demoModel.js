const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const demo = new Schema({
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
});

export default mongoose.model('demoModel', demo);