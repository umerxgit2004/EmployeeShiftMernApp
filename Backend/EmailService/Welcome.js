const ejs = require("ejs")
const dotenv = require("dotenv")
const path = require("path")
const sendMail = require("../helpers/sendEmail")
dotenv.config()

const sendWelcomeEmail = async (fullname,staffID,password,email) => {
    ejs.renderFile(
        //template getting from
        'templates/welcome.ejs',
        //data that you are going to send
        {
            fullname,staffID,password
        },
        //sent the email
        async (err, data) => {
            let messageoptions = {
                from : process.env.EMAIL,
                to : email,
                subject : "Welcome to AM Shifter",
                html: data,
               
            }
            try{
                await sendMail(messageoptions)
            } catch(error){
                console.log(error)
            }
        }
    )
}

module.exports={sendWelcomeEmail}