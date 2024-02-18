import { Project} from "@/model/Project";
import { connectToDatabse } from "../connectdb";


async function createProjects(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { projImage, projType, projCat, description, software, highlightProject } = req.body;

  try {
    const newProject = new Project({
    projImage, projType, projCat, description, software, highlightProject 
    });

    // Save the new project document in the database
    await newProject.save();

    res.status(201).json({ success: true, message: 'Project created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export default connectToDatabse(createProjects); // Ensure the function name is correctly referenced
