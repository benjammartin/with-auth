import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.FusionAuth({
      id: "d6f0466e-3e9e-4af8-bdda-545d2ffe76db",
      name: "webapp",
      domain: "dopamin-auth-app.herokuapp.com",
      clientId: "d6f0466e-3e9e-4af8-bdda-545d2ffe76db",
      clientSecret: "pZ1b_G50aMSAqc6rs8gbjgjnMbpPq7FpwJ0qS9j-kGg",
      //tenantId: process.env.FUSIONAUTH_TENANT_ID, // Only required if you're using multi-tenancy
    }),
  ],
});
