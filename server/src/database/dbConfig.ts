import mongoose from "mongoose";

const connectDb = async () => {

    try {
        const url = process.env.MONGO_URL || ""
        await mongoose.connect(url)
        console.log(`Database Connection Successfull`)
    } catch (error: any) {
        console.log("Database connection error", error.message)
    }
}

export default connectDb