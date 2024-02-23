import { workHistory } from "@/model/WorkHistory";
import jwt from "jsonwebtoken"
import { connectDb } from "@/utils/db";


async function createWorkHistory(req, res) {
    if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
await connectDb();
const token = req.headers.cookie.split("=")[1];
const decode = jwt.verify(token,process.env.JWT_SECRET)
 const userId = decode.user_id;
const { compName, designation, from,to, description} = req.body;
   const newWorkHistory = new workHistory({
compName, designation, from,to, description,user:userId
   })
    
    await newWorkHistory.save();
       console.log(newWorkHistory);
    res.status(201).json({ success: true, message: 'work History created successfully',wh:newWorkHistory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
export default createWorkHistory;