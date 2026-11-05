import { config } from "dotenv"
config({ path: "../.env" })
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT

const startServer = async () => {
    try {
        console.log("MongoDB URI loaded:", Boolean(process.env.MONGODB_URI));
        await connectDB();
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
}
startServer()
