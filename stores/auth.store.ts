import { defineStore } from "pinia";
import { getInitials } from "../utils";

export const authStore = defineStore("auth", {
  state() {
    return {
      user: null as User | null,
    };
  },

  getters: {
    initials(state) {
      if (!state.user) return "";
      return getInitials(state.user.username);
    },

    loggedIn(state) {
      return !!state?.user;
    },
  },

  actions: {
    saveAuthuser(user: User) {
      this.user = user;
    },

    clearUser() {
      this.user = null;
    },
  },
  persist: true,
});

type User = {
  username: string;
};
