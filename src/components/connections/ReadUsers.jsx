import React, { useEffect, useState } from "react";

function ReadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const csrfResponse = await fetch(
        "http://localhost/api/get_csrf_token.php",
        {
          method: "GET",
          credentials: "include",
        }
      );
      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.csrf_token;

      const response = await fetch(
        "http://localhost/api/read.php?table=tbl_users",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "X-CSRF-Token": csrfToken,
          },
        }
      );

      const result = await response.json();
      setUsers(result);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReadUsers;
