    import  express  from "express";
    import mongoose  from "mongoose";
    const app = express();
    const port = 3001


    const dbConnect = async()=>{
        try {
            const connection = await mongoose.connect('mongodb+srv://gutamh142:ZMYPKauo6Wr2ZFoH@cluster0.bloft8i.mongodb.net/?retryWrites=true&w=majority');
            console.log(`connected to databse: ${connection.connection.host}`)
        } catch (error) {
            console.error(`${error.message}`);
            process.exit(1);
        }
    }
    dbConnect();

    app.get('/api',(req,res)=>{
        res.json({
            message:'hello from backend'
        })
    })
    app.listen(port,()=>{
            console.log(`sever is running on port:${port}`);
    })