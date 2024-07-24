import React, { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    const csrfResponse = await fetch(
      "http://localhost/api/get_csrf_token.php",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const csrfData = await csrfResponse.json();
    const csrfToken = csrfData.csrf_token;

    const response = await fetch("http://localhost/api/create.php", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
      body: JSON.stringify({
        table: "tbl_users",
        username,
        password,
      }),
    });

    const result = await response.json();
    console.log(result.message);
  };

  return (
    <div>
      <h2>Create User</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={createUser}>Create</button>
    </div>
  );
}

export default CreateUser;
