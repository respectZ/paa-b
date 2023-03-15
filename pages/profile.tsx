import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

import React from "react";

function Profile() {
  const router = useRouter();
  let data = {
    username: "",
    email: "",
    password: "",
  };

  if (typeof window !== "undefined") {
    // Perform localStorage action
    const item = localStorage.getItem("usertoken");

    if (!item) {
      router.push("/login");
      return;
    }

    data = jwtDecode(item);
  }

  return (
    <div className="flex justify-center items-center text-neutral-900 font-bold text-7xl bg-white w-full h-full">
      {data ? data.email : "PROFILE"}
    </div>
  );
}

export default Profile;
