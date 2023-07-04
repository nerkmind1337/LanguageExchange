"use client";

import { useSession } from "next-auth/react";

export const UserTest = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
};