import express from 'express'
import { model, Schema } from 'mongoose'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const testUserSchema = new Schema({
    name: String,
    age: String
})

const TestUser = model("TestUser", testUserSchema);

app.post("/api/test-user", async (req, res) => {
    const { name, age } = req.body

    try {

        const user = await TestUser.create({
            name,
            age,
        });
        res.status(201).json({
            message: "User saved successfully",
            user,
        })
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        })
    }
})

app.get("/api/health", (_req, res) => {
    res.status(200).json({
        message: "Api health is Oki !!!"
    })
})

export default app