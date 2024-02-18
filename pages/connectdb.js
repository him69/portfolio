import { connectDb } from "@/utils/db";
export function connectToDatabse(handler){
    return async function(req,res){
        try {
            await connectDb();
            await handler(req,res);
        } catch (error) {
            console.error('error in connecting with database',error);
            res.status(500).json({
                success:false,
                message:"Internal server error"
            })
        }
    }

}