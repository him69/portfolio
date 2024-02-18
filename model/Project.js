import mongoose from "mongoose"
const schema = new mongoose.Schema({
   
        projImage: String,
        projType: String,
        projCat: String,
        description: String,
        software: String,
        highlightProject: Boolean

})
mongoose.models = {};
export const Project = mongoose.model('Project', schema);