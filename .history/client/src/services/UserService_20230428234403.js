import $api from "../http";
export default class UserService {
  static fetchUsers() {
    return $api.get("/users");
  }

  static updateScore(email, score) {
    return $api.post(`/score`, { email, score });
  }

  static async getScores(email) {
    console.log(email, "email getScores http");
    return $api.get(`/scores`, { email });
  }
}
