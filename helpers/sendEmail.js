
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, ENDGRID_USER_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: ENDGRID_USER_EMAIL };
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = sendEmail;