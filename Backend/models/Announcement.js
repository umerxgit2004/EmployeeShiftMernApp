 const mongoose = require ("mongoose")

 const AnnouncementSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    time: {
        type: String,
    }
 },{timestamps:true})



 module.export = mongoose.model("Announcements",AnnouncementSchema)