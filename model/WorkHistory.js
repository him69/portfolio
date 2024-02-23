import mongoose from "mongoose"
const schema = new mongoose.Schema({

        compName: String,
        designation: String,
        from: Date,
        to: Date,
        description: String,
        user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User', 
                required: false 
              }

})
mongoose.models = {};
export const workHistory = mongoose.model('workHistory', schema);