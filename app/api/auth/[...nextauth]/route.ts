import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "lib/constants";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google" && profile) {
        return profile.email === "iamshawnrice@gmail.com";
      }

      return false;
    },
  },
});

export { handler as GET, handler as POST };
