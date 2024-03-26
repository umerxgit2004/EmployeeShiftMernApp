const ejs = require("ejs")
const dotenv = require("dotenv")
const path = require("path")
const sendMail = require("../helpers/sendEmail")
dotenv.config()

const shiftAssignment = async(location,date,time,type,duration,client,email,notes) =>{
ejs.renderFile(
    'templates/shiftAssignment.ejs',
    {
        location,date,time,type,duration,client,notes
        
    },
    async (err,data) => {
           let messageoptions = {
            from : process.env.EMAIL,
            to : email,
            subject : "You have a new shift",
            html:data
           };
           try{
            await sendMail(messageoptions)
           }catch(error){
            console.log(error)
           }
    }
)
}
module.exports(shiftAssignment)