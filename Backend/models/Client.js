const mongoose = require('mongoose')

const ClientSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,

    },
    address: {
        type: String,
    },
    gender: {
        type: String,
    },
    DOB: {
        type: String
    },
    ndisNo: {
        type: String
    },
    startdate: {
        type: String
    },
    enddate: {
        type: String
    },
    desc:{
        type: String
    },
    role:{
        type: String,
        default: "client"
    },
    passwords: {
        type: String,
        
    },
    documents: {
        type: Array,
    },
    isActive: {
        type: String,
        default: "Yes"
    },
    img: {
        type: String,
    }
},{timestamps:true})

module.exports = mongoose.model("User", ClientSchema)