const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const creditCardSchema = new mongoose.Schema(
    {
        name: {
            type: ObjectId, 
            required: true
        },
        credits: {
            type: Number
        },
        number: {
            type: Number
        },
        date: {
            type: Date
        },
        
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model("CreditCard", creditCardSchema);