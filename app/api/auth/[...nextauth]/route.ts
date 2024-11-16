import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {
  AUTH_EMAIL_WHITELIST,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "lib/constants";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google" && profile?.email) {
        return AUTH_EMAIL_WHITELIST.split(" ").includes(profile.email);
      }

      return false;
    },
  },
});

export { handler as GET, handler as POST };
