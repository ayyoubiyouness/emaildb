import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import Data from "./models/Data.js";

const app = express()
app.use(express.json());
app.use(cors())
const MONGO_URL = "mongodb+srv://younessayy22:Engineer2002@youness.srdvuku.mongodb.net/email?retryWrites=true&w=majority"
const connect = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

app.post("/", async (req, res) => {
    console.log(req.body)
    try {
        const newInfo = new Data(req.body)
        console.log("salut")
        await newInfo.save()
        res.status(200).send("Email has been created")
    } catch (error) {
        res.status(500).json(error)

    }


})

app.get("/", async (req, res) => {
    try {
        const email = await Data.find()
        res.status(200).json(email)

    } catch (error) {
        res.status(500).json(error)

    }
})

app.delete("/:id", async (req, res) => {
    try {
        await Data.findByIdAndDelete(req.params.id)
        res.status(200).json("email has been deleted")


    } catch (error) {
        res.status(500).json(error)

    }
})

app.put("/:id", async (req, res) => {
    try {
        await Data.updateOne({ $set: req.body });
        res.status(200).json("the account has been updated");
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get("/count", async(req, res) => {
    try {
        const total = await Data.countDocuments()
        res.status(200).json(total)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})

app.listen(8800, () => {
    connect()
    console.log("connected to backend")
})