import { connectDb } from "@/utils/db";
import { Project } from "@/model/Project";
import jwt from "jsonwebtoken"
    import { User } from "@/model/User";

const getallProjects = async (req,res) => {
  try {

 await connectDb();
   const token = req.headers.cookie.split("=")[1];
   const decode = jwt.verify(token,process.env.JWT_SECRET)
    const user = await User.findById(decode.user_id);
    // console.log(user);
    const Projects = await Project.find()
   if(!Projects){
    res.status(404).json({
      success:false,
      message:"no project found"
    })
   }

    res.status(200).json({
      success: true,
      message:'hello',
      Projects: Projects,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}


export default getallProjects;
