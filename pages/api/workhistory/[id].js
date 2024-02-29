import { connectDb } from "@/utils/db";
import { User } from "@/model/User";
import jwt from 'jsonwebtoken';
import { workHistory } from "@/model/WorkHistory";




export default async function updateworkhistory(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
    try {   
        await connectDb();
        const token = req.headers.cookie.split("=")[1];
   const decode = jwt.verify(token,process.env.JWT_SECRET)
    const user = await User.findById(decode.user_id);
    const {id}=req.query;
    const updatework = req.body
    const uwh =await workHistory.findOneAndUpdate(
        {_id:id,user:user},
        {updatework},
        {new:true}
    );
    if(!uwh){
        return res.status(404).json({success:false,message:'work history not update'})
    }
    res.status(200).json({success:true,message:"work updated success"})
    } catch (error) {
        console.error("Error details:", error.message);
        console.error("Error stack:", error.stack);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}