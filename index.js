const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/database");
const habitrouter=require("./routes/Habit")
const app = express();
const errorHandle = require("./middleware/errorHandle.js");

dotenv.config();

const PORT=process.env.PORT ||4000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "working"
    });
});

app.use("/habits",habitrouter);

app.use((req, res) => {
    res.status(404).json({
        message: "Page not found"
    })
});

app.use(errorHandle);

app.listen(PORT,()=>{
    connectDB();
    console.log("server listening on " + PORT);
})