const User = require("../models/User")
const ejs = require("ejs");
const dotenv = require("dotenv");
const path = require("path");
const sendMail = require("../helpers/sendEmail");

dotenv.config();

const announcementEmail = async (title, description) => {
    // Assuming User is a model or reference to a user database model
    const users = await User.find();
    if (users.length > 0) {
        for (let user of users) {
            ejs.renderFile(
                'templates/announcement.ejs',
                { description },
                async (err, data) => {
                    let messageOptions = {
                        from: process.env.EMAIL,
                        to: user.email,
                        subject: `${title}`,
                        html: data
                    };
                    try {
                        await sendMail(messageOptions);
                    } catch (error) {
                        console.log(error);
                    }
                }
            );
        }
    }
};

module.exports = { announcementEmail };