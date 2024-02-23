import { workHistory } from "@/model/WorkHistory";
import { connectDb } from "@/utils/db";
import jwt from "jsonwebtoken"
    import { User } from "@/model/User";

const getallworks = async (req,res) => {

    try {
        await connectDb();
        const token = req.headers.cookie.split("=")[1];
        const decode = jwt.verify(token,process.env.JWT_SECRET)
         const user = await User.findById(decode.user_id);
        const getWorkHistory =await workHistory.find();
        if(getWorkHistory)
        res.status(200).json({
            success: true,
            wh: getWorkHistory
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
export default getallworks;