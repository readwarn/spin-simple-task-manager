import { authStore } from "~/stores/auth.store";

export const useAuth = () => {
  const store = authStore();
  const user = computed(() => store.user);
  const isLoggedIn = computed(() => store.loggedIn);
  const initials = computed(() => store.initials);
  const logIn = (username: string) => {
    store.saveAuthuser({ username });
    navigateTo("/");
  };
  const logOut = () => {
    store.clearUser();
    navigateTo("/login");
  };

  return {
    ...store,
    user,
    isLoggedIn,
    initials,
    logIn,
    logOut,
  };
};
