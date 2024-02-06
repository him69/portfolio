import { User } from "@/model/User";
import { connectDb } from "@/utils/db"

    export default async function handler (req,res){
      await  connectDb();
      const newProject = {
        projImage: "project",
        projType: "social media post",
        projCat: "post",
        description: "hello this is description 2",
        software: "photoshop",
        highlightProject: false,
      };
      
      
      const userEmail = "gutamh142@gmail.com"; 
      User.findOne({ email: userEmail })
        .then((user) => {
          if (!user) {
            console.error("User not found");
            return res.status(404).json({ success: false, message: "User not found" });
          }
      
          user.project.push(newProject);
          user.save();
        })
        .then((updatedUser) => {
          // Handle success
          res.status(200).json({
            success: true,
            message: "Project added to the user's project array",
            user: updatedUser,
          });
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
          res.status(500).json({ success: false, message: "Internal Server Error" });
        });
    }