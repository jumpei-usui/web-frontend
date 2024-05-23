export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || "http://localhost:8000",
      cognitoUserPoolId:
        process.env.COGNITO_USER_POOL_ID || "COGNITO_USER_POOL_ID_IS_NOT_SET",
      cognitoUserPoolClientId:
        process.env.COGNITO_USER_POOL_CLIENT_ID ||
        "COGNITO_USER_POOL_CLIENT_ID_IS_NOT_SET",
      cognitoDomain: process.env.COGNITO_DOMAIN || "COGNITO_DOMAIN_IS_NOT_SET",
      cognitoRedirectUrl:
        process.env.COGNITO_REDIRECT_URL || "COGNITO_REDIRECT_URL_IS_NOT_SET",
    },
  },
  ssr: false,
});
