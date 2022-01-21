const bcrypt = require("bcryptjs");

import { apiHandler, hostingRepo } from "helpers/api";

export default apiHandler({
  post: register,
});

function register(req, res) {
  // split out password from user details
  const { password, ...user } = req.body;

  // validate
  if (hostingRepo.find((x) => x.username === user.username))
    throw `User with the username "${user.username}" already exists`;

  // hash password
  user.hash = bcrypt.hashSync(password, 10);

  hostingRepo.create(user);
  return res.status(200).json({});
}
