import { workHistory } from "@/model/WorkHistory";
import { connectToDatabse } from "../connectdb";


async function getWorkHistory(req, res) {

    try {
        const getWorkHistory =await workHistory.find();
        if(getWorkHistory)
        res.status(200).json({
            success: true,
            wh: getWorkHistory
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
export default connectToDatabse(getWorkHistory);