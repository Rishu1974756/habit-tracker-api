const mongoose =require("mongoose");

const connectDB=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    }catch(err){
        console.log("Monogodb connection failed")
        console.log(err);
        process.exit(1);
    }
};

module.exports=connectDB;