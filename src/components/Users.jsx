import React, { useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 0, name: "user1", surname: "surn1", age: 30, banned: false },
    { id: 1, name: "user2", surname: "surn2", age: 31, banned: false },
    { id: 2, name: "user3", surname: "surn3", age: 32, banned: false },
  ]);

  const banUser = (id) => {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user.banned = true;
        }
        return user;
      })
    );
  };

  const setUser = (newUser, userId) => {
    setUsers(
      users.map((user) => {
        if (user.id === userId) {
          user = newUser;
        }
        return user;
      })
    );
  };

  return (
    <div>
      {users.map((item) => (
        <User user={item} banUser={banUser} setUser={setUser} />
      ))}
    </div>
  );
};

export default Users;
