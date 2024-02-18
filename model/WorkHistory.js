import mongoose from "mongoose"
const schema = new mongoose.Schema({

        compName: String,
        designation: String,
        from: Date,
        to: Date,
        description: String,

})
mongoose.models = {};
export const workHistory = mongoose.model('workHistory', schema);