import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI!,{
            dbName:"whatsappbackendnextjs"
        })
        return true
    } catch (error) {
        console.error("Database connection failed:", error)
        return  false
    }
}