import express from "express";
import postRoutes from "./routes/post.js"
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";


const port = 8800
const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);

app.listen(port,()=>{
    console.log(`Server connected to port number ${port}`);
})