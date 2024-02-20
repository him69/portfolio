import { User } from "@/model/User";
import { connectDb } from "@/utils/db";



const login = async(req,res)=>{
    if(req.method !== 'POST'){
        return res.status(405).json({sucess:false,message:" Method not allowed"})
    }
    const {email,password}=req.body;
    await connectDb();
    const user= await User.findOne({email}).lean();
    if(user){
       
       if(user.password == password){
        return res.status(200).json({sucess:true,message:"user logged in sucessfully",user})
       }else{
        return res.status(404).json({sucess:false,message:"either email or password is wrong"})
       }}
    // console.log(email,password)
     else{
        return res.status(404).json({sucess:false,message:"no user found with this email"})
    }
}
export default login