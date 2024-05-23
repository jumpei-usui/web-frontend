export default defineNuxtRouteMiddleware(async (to) => {
  try {
    const session = await useNuxtApp().$auth.fetchAuthSession();

    if (session.tokens === undefined && to.path !== "/login") {
      return navigateTo("/login");
    }

    if (session.tokens !== undefined && to.path === "/login") {
      return navigateTo("/");
    }
  } catch {
    if (to.path !== "/login") {
      return navigateTo("/login");
    }
  }
});
