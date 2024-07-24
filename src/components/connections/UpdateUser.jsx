import React, { useState } from "react";

function UpdateUser() {
  const [userId, setUserId] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const updateUser = async () => {
    const csrfResponse = await fetch(
      "http://localhost/api/get_csrf_token.php",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const csrfData = await csrfResponse.json();
    const csrfToken = csrfData.csrf_token;

    const response = await fetch("http://localhost/api/update.php", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
      body: JSON.stringify({
        table: "tbl_users",
        data: {
          username: newUsername,
          password: newPassword,
        },
        conditions: {
          id: userId,
        },
      }),
    });

    const result = await response.json();
    console.log(result.message);
  };

  return (
    <div>
      <h2>Update User</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        placeholder="New Username"
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="New Password"
      />
      <button onClick={updateUser}>Update</button>
    </div>
  );
}

export default UpdateUser;
