const transport = require("../utils/smtpTransport");
const { USER_EMAIL } = require("../config/index");

const sendVerificationEmail = async (email, token) => {
  const mailOption = {
    to: email,
    from: USER_EMAIL,
    subject: "DEPRESSION IS REAL",
    html: `<div><p> Dear <strong>Valid user</strong> </p>
        <h4> You are a step closer !!! </h4>
        <p> Use the token below to verify your account</p>
        <h1> ${token} </h1>
        <p>Thanks </p>.
         <div>`,
  };

  transport.sendMail(mailOption, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent successfully");
    }
  });
};

const sendUserReminder = async (email, professionalFirstname) => {
  const mailOption = {
    to: email,
    from: USER_EMAIL,
    subject: "DEPRESSION IS REAL",
    html: `<div><p> Dear <strong>Valid user</strong> </p>
        <h4> You session will be ready in an hour !!! </h4>
        <p> Your session with ${professionalFirstname} will be ready in an hour</p>
        <p>Thanks </p>.
         <div>`,
  };
  transport.sendMail(mailOption, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent successfully");
    }
  });
};

const sendProfessionalReminder = async (email, userFirstname) => {
  const mailOption = {
    to: email,
    from: USER_EMAIL,
    subject: "DEPRESSION IS REAL",
    html: `<div><p> Dear <strong>professional</strong> </p>
        <h4> You session will be ready in an hour !!! </h4>
        <p> Your session with ${userFirstname} will be ready in an hour</p>
        <p>Thanks </p>.
         <div>`,
  };
  transport.sendMail(mailOption, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent successfully");
    }
  });
};

module.exports = {
  sendVerificationEmail,
  sendProfessionalReminder,
  sendUserReminder,
};
