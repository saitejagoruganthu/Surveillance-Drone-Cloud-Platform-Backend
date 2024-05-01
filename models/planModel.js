const mongoose = require('mongoose');

const CoordsSchema = new mongoose.Schema({
    lat: Number,
    lng: Number
  });

const planSchema = new mongoose.Schema({
    TenantId: {
        type: String, 
        required: true
    },
    MissionId:{
        type:String,
        required:true,
        unique:true,
    },
    MissionType: {
        type: String,
        required: true
    },
    Location: {
        type: String,
    },
    FlightPlanCoordinates: {type:[CoordsSchema], default:undefined},
    FlightHeight: {
        type: Number,
        required: true
    },
    Alerts: {
        type: Array,
    }
});


module.exports = mongoose.model('planData', planSchema);