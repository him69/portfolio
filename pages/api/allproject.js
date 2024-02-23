import { connectDb } from "@/utils/db";
// import { connectToDatabse } from "../connectdb";
import { Project } from "@/model/Project";
// import jwt from "jsonwebtoken"
// import { User } from "@/model/User";

const allProjects = async (req,res) => {
  try {

 await connectDb();
   
    const Projects = await Project.find()
   if(!Projects){
    res.status(404).json({
      success:false,
      message:"no project found"
    })
   }

    res.status(200).json({
      success: true,
      message:'getting all project',
      Projects: Projects,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}


export default allProjects;
