import { connectDb } from "@/utils/db";
import { Project } from "@/model/Project";

export default async function updateProject(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
  try {
    await connectDb();
    await connectDb();
    const token = req.headers.cookie.split("=")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decode.user_id);
    const { id } = req.query;
    const projectUpdates = req.body;
    const updatedProject = await Project.findByIdAndUpdate({ _id: id, user: user }, { projectUpdates }, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.status(200).json({ success: true, message: 'Project updated successfully', project: updatedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
