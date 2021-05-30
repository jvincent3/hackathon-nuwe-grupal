const mongoose = require("mongoose");

// Se crea el esquema del modelo de Usuario
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            dropDups: true
        },
        password: {
            type: String,
            required: true
        },
        email:  {
            type: String,
            required: true,
            unique: true,
            dropDups: true
        },
        repos:  {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
    }
);

// Se exporta el modelo de Usuario para ser utilizado en los controladores
module.exports = mongoose.model("User", userSchema);