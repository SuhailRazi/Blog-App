import express from "express";
import postRoutes from "./routes/post.js"

const port = 8800
const app = express();

app.use(express.json());

app.use("/api/posts",postRoutes);

app.listen(port,()=>{
    console.log(`Server connected to port number ${port}`);
})