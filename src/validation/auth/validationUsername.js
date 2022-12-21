exports.checkUsername = (usernameInput, usernameList) => {
  const username = usernameInput.toLowerCase();

  const usernameRegex = /(^[a-z0-9]+[a-z]+[\w-.]+)([^\w-.]*)/;
  const result = username.match(usernameRegex);

  //+ Validate length
  ///+  Empty length
  if (username.length === 0) return { result: false, message: "Invalid or empty username." };
  ///+  Length : 6 - 15
  else if (username.length < 6 || username.length > 15)
    return { result: false, message: "Username should be between 6-15 characters." };
  //+ Validate with Regex
  // Start only with a-z0-9
  // Exclude special character except - _ .
  // Include character at least 1
  else if (result === null || result[2].length !== 0) {
    return {
      result: false,
      message:
        "Username should be alphanumberic (a-Z, 0-9). You may include underscore (_), hyphen(-) and dot(.). It has to start and end with an alphabet or a number, and contain at least one alphabet."
    };
  }

  //+ Check duplicate username
  const dupResult = usernameList.includes(username);
  if (dupResult) return { result: false, message: "This username has been taken. Please try another." };
  else return { result: true, message: "" };
};
