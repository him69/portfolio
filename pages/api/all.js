import { User } from "@/model/User";
import { connectDb } from "@/utils/db";

export default async function allProjectsByEmail(req, res) {
  const userEmail = "gutamh142@gmail.com"; // Replace with the user's email

  try {
    await connectDb();

    // Find the user by their email
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      // Handle the case where the user is not found
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Access the "project" array within the user document
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
