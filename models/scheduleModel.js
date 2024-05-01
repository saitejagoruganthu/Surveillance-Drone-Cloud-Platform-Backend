const mongoose=require('mongoose')

const scheduleModel=mongoose.Schema(
    {
        schedule_id:{type:String,required:true, unique:true},
        start_time:{type:String,required:true},
        end_time:{type:String, required:true},
        mission_id:{type:String, required:true},
        drone_id:{type:String,required:true},
    },
);

const Schedule=mongoose.model("Schedulemodel",scheduleModel);

module.exports=Schedule;

