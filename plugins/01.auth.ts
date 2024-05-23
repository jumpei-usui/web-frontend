import { Amplify } from "aws-amplify";
import {
  signInWithRedirect,
  signOut,
  fetchAuthSession,
} from "aws-amplify/auth";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: config.public.cognitoUserPoolId,
        userPoolClientId: config.public.cognitoUserPoolClientId,
        loginWith: {
          oauth: {
            domain: config.public.cognitoDomain,
            scopes: ["openid"],
            redirectSignIn: [config.public.cognitoRedirectUrl],
            redirectSignOut: [config.public.cognitoRedirectUrl],
            responseType: "code",
          },
        },
      },
    },
  });
  return {
    provide: { auth: { signInWithRedirect, signOut, fetchAuthSession } },
  };
});
