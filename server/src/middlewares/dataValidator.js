const checkUserData = async (req, res, next) => {
  const { email, firstName, lastName, gender } = req.body;

  if (!email || !firstName || !lastName || !gender) {
    return res.status(403).json({ error: "all input fields are required" });
  }

  if (!email.includes("@")) {
    return res.status(403).json({ error: "invalid email address" });
  }

  next();
};

const checkPasswordValidity = async (req, res, next) => {
  const { password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(403).json({ error: "password does not match" });
  }

  if (password.length < 8) {
    return res
      .status(403)
      .json({ error: "password must be atleast 8 characters" });
  }

  const validPassword = {
    hasUpper: /[A-Z]/,
    hasLower: /[a-z]/,
    hasNumber: /[0-9]/,
    hasSpclChr: /[@,#,$,%,&]/,
  };

  // check if password has uppercase, lowercase, number and special character
  if (!validPassword.hasUpper.test(password)) {
    return res
      .status(403)
      .json({ error: "password must include an uppercase" });
  }

  if (!validPassword.hasLower.test(password)) {
    return res.status(403).json({ error: "password must include a lowercase" });
  }

  if (!validPassword.hasNumber.test(password)) {
    return res.status(403).json({ error: "password must include a number" });
  }

  if (!validPassword.hasSpclChr.test(password)) {
    return res
      .status(403)
      .json({ error: "password must include a special character" });
  }

  if (!password || !confirmPassword) {
    return res.status(403).json({ error: "all input fields are required" });
  }

  next();
};

const checkIsTokenValid = (req, res, next) => {
  const { verificationToken } = req.body;
  if (!verificationToken) {
    return res.status(403).json({ error: "verification token is not valid" });
  }
  if (verificationToken.length < 6) {
    return res
      .status(403)
      .json({ error: "verification token must be 6 digits" });
  }
  if (Number(verificationToken) === isNaN) {
    return res
      .status(403)
      .json({ error: "verification token must be a number" });
  }

  next();
};

module.exports = { checkUserData, checkPasswordValidity, checkIsTokenValid };
