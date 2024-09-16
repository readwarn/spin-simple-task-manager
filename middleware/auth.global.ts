export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    const { isLoggedIn } = useAuth();
    if (to.path !== "/login" && !isLoggedIn.value) {
      return navigateTo("/login");
    }
  }
});
