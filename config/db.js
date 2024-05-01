const mongoose=require("mongoose");

//process.env.MONGO_URI = "mongodb+srv://us-west-2.aws.data.mongodb-api.com/app/data-pbmtq/endpoint/data/v1"
url = process.env.DATABASE_URL;
const connectDb=async()=>{
    try{
        const conn= await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            dbName: "Surveillance-Drone-Cloud"
        })
        console.log("MongoDB connected:",conn.connection.host);
    } catch(error){
        console.log("Error:",error);
    }
}

module.exports=connectDb;