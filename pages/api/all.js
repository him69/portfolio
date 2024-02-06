import { User } from "@/model/User";
import { connectDb } from "@/utils/db";

export default async function allProjectsByEmail(req, res) {
  const userEmail = "gutamh142@gmail.com";

  try {
    await connectDb();

    const user = await User.findOne({ email: userEmail });

    if (!user) {

      return res.status(404).json({ success: false, message: "User not found" });
    }

    const userProjects = user.project;

    res.status(200).json({
      success: true,
      userProjects: userProjects,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
