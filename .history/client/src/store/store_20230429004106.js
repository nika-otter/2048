import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "../http";
import UserService from "../services/UserService";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  scores = {};
  constructor() {
    makeAutoObservable(this);
  }
  setAuth(bool) {
    this.isAuth = bool;
  }
  setUser(user) {
    this.user = user;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  setScores(scores) {
    this.scores = scores;
  }

  async login(email, password) {
    console.log("login");
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      console.log(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async registration(email, password) {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);
      localStorage.removeItem("token", response.data.accessToken);
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    console.log("checkAuth");
    this.setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log(response, "response checkAuth");
      console.log(
        response.data.accessToken,
        "response.data.accessToken checkAuth"
      );
      localStorage.setItem("token", response.data.accessToken);

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async saveScore(email, score) {
    try {
      const response = await UserService.updateScore(email, score);
      //   this.scores = response.data.user.scores;
      console.log(response.data.user.scores);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
  async getScores(email) {
    try {
      const response = await UserService.getScores(email);
      console.log(response, "response getScores");
      this.setScores(response.data.user.scores);
      //   console.log(response.data.user.scores);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
