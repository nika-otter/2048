module.exports = class UserDto {
  email;
  id;
  isActivated;
  scores;
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.scores = model.scores;
  }
};
