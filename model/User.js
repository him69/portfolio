import mongoose from "mongoose";
const schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    
});
mongoose.models = {};
export const User = mongoose.model("User", schema);