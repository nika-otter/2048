const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const TokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(`User with email ${email} already exists`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
      scores,
    });
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });

    return { ...tokens, user: userDto };
  }
  async scoreUpdate(email, score) {
    const user = await UserModel.findOne({ email });
    console.log(user, "user in scoreUpdate in user-service");
    user.scores.push(score);
    await user.save();
    return user.scores;
  }

  async scoreGet(email) {
    const user = await UserModel.findOne({ email });
    console.log(user, "user in scoreGet in user-service");
    return user;
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("Incorrect activation link");
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest("User with this email is not found");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Incorrect password");
    }
    const userDto = new UserDto(user);

    const tokens = TokenService.generateTokens({ ...userDto });
    console.log(user, tokens);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    // const token = await TokenService.removeToken(refreshToken);
    return refreshToken;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw AuthError.unAuthorizedError();
    }
    const userData = TokenService.validateRefreshToken(refreshToken);
    if (!userData) {
      throw AuthError.unAuthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);

    const tokens = TokenService.generateTokens({ ...userDto });
    console.log(user, tokens);
    return { ...tokens, user: userDto };
  }

  async getUsers() {
    const users = await UserModel.find();
    return users;
  }
}
module.exports = new UserService();
