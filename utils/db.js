import mongoose from "mongoose"

export const connectDb=async ()=>{
    try {
       const {connection}= await mongoose.connect('mongodb+srv://gutamh142:ZMYPKauo6Wr2ZFoH@cluster0.bloft8i.mongodb.net/?retryWrites=true&w=majority',{
        dbName: 'portfolio',
        useNewUrlParser: true,
       });
       console.log(`conected to databse: ${connection.host}`);
    } catch (e) {
        console.log(e)
    }
}