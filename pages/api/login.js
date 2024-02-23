import { User } from "@/model/User";
import { connectDb } from "@/utils/db";
import  jwt  from "jsonwebtoken";
import {serialize} from "cookie"

const login = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ sucess: false, message: " Method not allowed" })
    }
    const { email, password } = req.body;
    await connectDb();
    const user = await User.findOne({ email }).lean();
    if (user) {

        if (user.password == password) {
            const token = jwt.sign(
                { user_id: user._id }, process.env.JWT_SECRET
            );
            res.setHeader("Set-Cookie",serialize("token",token,{
                path:'/',
                httpOnly:true,
                maxAge:60*60*1000
            }))
            return res.status(200).json({ sucess: true, message: "user logged in sucessfully", token })
        } else {
            return res.status(404).json({ sucess: false, message: "either email or password is wrong" })
        }
        // console.log(email, password);
    }else {
    return res.status(404).json({ sucess: false, message: "no user found with this email" })
}
}
export default login