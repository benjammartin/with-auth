import React, { Fragment } from "react";
import { useSession, signIn, signOut } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  if (session) {
    return (
      <Fragment>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </Fragment>
    );
  }
  return (
    <Fragment>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </Fragment>
  );
}
