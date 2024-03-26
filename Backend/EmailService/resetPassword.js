const ejs = require("ejs")
const dotenv = require("dotenv")
const path = require("path")
const sendMail = require("../helpers/sendEmail")
dotenv.config()

const sendResetPasswordEmail  = async (email,password) =>{
    ejs.renderFile(
        'templates/resetpassword.ejs',
        {password},
        async (err, data) => {
            let messageOptions = {
                from : process.env.EMAIL,
                to : email,
                subject : "Your reset password link",
                html:data
            }
            try{
                await sendMail(messageOptions)
            }catch(error){
                console.log(error)
            }
        }
    )
}
module.exports={sendResetPasswordEmail}