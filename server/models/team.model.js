const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const teamSchema = new mongoose.Schema(
    {

        name: {
            type: String
        },
        members: [{
            username: {type :String}
        }],
        description: {
            type: String
        },
    },
    {
        timestamps: true,
    }

);


module.exports = mongoose.model("Team", teamSchema);