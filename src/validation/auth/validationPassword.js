// - Length : 8 - 16 Characters
// - contain at least one lower case (a-z)
// - contain at least one Upper case (A-Z)
// - contain at least one number (0-9)
// - contain at least one symbol

exports.checkPassword = (password) => {
  const passwordRegex =
    /(?=.*(?<number>\d))(?=.*(?<lowercase>[a-z]))(?=.*(?<uppercase>[A-Z]))(?=.*(?<symbol>[^a-zA-Z0-9^\s]))(?!.*\s)(?<!.*\s)/;
  const result = password.match(passwordRegex);

  //+ Validate length
  ///+ Empty length
  if (password.length === 0) return { result: false, message: "Password cannot be empty." };
  ///+ Length : 8 - 16 + Regex
  else if (password.length < 8 || password.length > 16 || result === null)
    return {
      result: false,
      message:
        "Your password must be between 8-16 characters, contain at least one lowercase letter (a-z), one uppercase letter (A-Z), one number (0-9), and one symbol."
    };
  else return { result: true, message: true };
};
