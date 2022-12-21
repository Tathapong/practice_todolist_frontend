const validator = require("validator");

exports.checkEmail = (data, emailList) => {
  const email = data.toLowerCase();
  //* Validate format of email
  if (!validator.isEmail(email)) return { result: false, message: "Invalid email format." };
  else if (emailList.includes(email)) return { result: false, message: "The email has already been used" };
  else return { result: true, message: "" };
};
