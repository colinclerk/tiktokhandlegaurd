import { UserButton, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import Head from "next/head";

export const TikTokHandleGuard = ({ children }) => {
  const user = useUser();
  const [handle, setHandle] = useState("");
  const saveTikTok = async (e) => {
    e.preventDefault();
    const body = new URLSearchParams();
    body.append("handle", handle);
    try {
      await fetch("/api/saveTikTokHandle", {
        method: "POST",
        body: body.toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      await user.update({});
    } catch (e) {
      // Add handling if server fails
    }
  };

  return user.publicMetadata.tikTokHandle ? (
    <>{children}</>
  ) : (
    <>
      <Head>
        <title>Enter your TikTok handle to get started</title>
      </Head>
      <div>
        <UserButton />
        <h2>Enter your TikTok handle to get started</h2>
        <form onSubmit={saveTikTok}>
          <input
            type="text"
            onChange={(e) => {
              setHandle(e.target.value);
            }}
            value={handle}
          />
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};
