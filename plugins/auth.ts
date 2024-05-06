export default defineNuxtPlugin((nuxtApp) => {
  const auth = {
    login() {
      console.log("login");
    },
    logout() {
      console.log("logout");
    },
  };
  return {
    provide: { auth },
  };
});
