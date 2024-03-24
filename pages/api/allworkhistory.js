import { workHistory } from "@/model/WorkHistory";
import { connectDb } from "@/utils/db";


async function getWorkHistory(req, res) {

    try {
        await connectDb();
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
export default getWorkHistory;