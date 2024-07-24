import React, { useState } from "react";

function DeleteUser() {
  const [userId, setUserId] = useState("");

  const deleteUser = async () => {
    const csrfResponse = await fetch(
      "http://localhost/api/get_csrf_token.php",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const csrfData = await csrfResponse.json();
    const csrfToken = csrfData.csrf_token;

    const response = await fetch("http://localhost/api/delete.php", {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
      body: JSON.stringify({
        table: "tbl_users",
        id: userId,
      }),
    });

    const result = await response.json();
    console.log(result.message);
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <button onClick={deleteUser}>Delete</button>
    </div>
  );
}

export default DeleteUser;
