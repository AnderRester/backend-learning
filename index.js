import express from 'express'
import mongoose from "mongoose";
import Post from "./Post.js";
import router from "./Router.js";
import  fileUpload from "express-fileupload";

const PORT = 15000;
const DB_URL = `mongodb+srv://andrew:root@back-end-learning.iduwr.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Server started on port " + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp(); // Connect to DB

// app.listen(PORT, () => console.log("Server is Online " + PORT));