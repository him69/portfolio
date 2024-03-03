import { Project} from "@/model/Project";
import { connectDb } from "@/utils/db";
import jwt from "jsonwebtoken"

async function createProjects(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
 
  

  try {
    await connectDb();
    if (!req.headers.cookie) {
      return res.status(400).json({ success: false, message: 'No cookie found' });
    }
    const token = req.headers.cookie.split("=")[1];
    const decode = jwt.verify(token,process.env.JWT_SECRET)
     const userId = decode.user_id;
     const { projImage, projType, projCat, description, software, highlightProject } = req.body;
    const newProject = new Project({
    projImage, projType, projCat, description, software, highlightProject ,user:userId
    });

    // Save the new project document in the database
    await newProject.save();

    res.status(201).json({ success: true, message: 'Project created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export default createProjects; // Ensure the function name is correctly referenced
