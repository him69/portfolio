import { workHistory } from "@/model/WorkHistory";
import { connectToDatabse } from "../connectdb";

async function createWorkHistory(req, res) {
    if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { compName, designation, from,to, description} = req.body;
  try {

   const newWorkHistory = new workHistory({
compName, designation, from,to, description
   })
    
    await newWorkHistory.save();
       console.log(newWorkHistory);
    res.status(201).json({ success: true, message: 'work History created successfully',wh:newWorkHistory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
export default connectToDatabse(createWorkHistory);