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
    project: [{
        projImage: String,
        projType: String,
        projCat: String,
        description: String,
        software: String,
        highlightProject: Boolean
    }],
    workHistory: [{
        compName: String,
        designation: String,
        from: Date,
        to: Date,
        description: String,
    }]
});
mongoose.models = {};
export const User = mongoose.model("User", schema);