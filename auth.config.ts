import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // 权限校验，是否登录
    authorized: ({ auth, request: { nextUrl } }) => {
      console.log("--->", auth);
      const isLogIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.includes("/dashboard");

      if (isOnDashboard) {
        if (isLogIn) {
          return true;
        }
        return false;
      } else if (isLogIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      if (isLogIn) return true;
      return false;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
