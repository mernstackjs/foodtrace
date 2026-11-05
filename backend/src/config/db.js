import mongoose from "mongoose";

export const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected to database:", mongoose.connection.name);
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

