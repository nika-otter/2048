const UserModel = require("../models/user-model");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`User with email ${email} already exists`);
    }
    const user = await UserModel.create({ email, password });
  }
}
module.exports = new UserService();
