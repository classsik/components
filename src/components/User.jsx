import React from "react";
import { useState } from "react";

const User = ({ user, banUser, setUser }) => {
  const [edit, setEdit] = useState(false);

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [age, setAge] = useState(user.age);

  const editUser = () => {
    if (edit) {
      setUser({ ...user, name: name, surname: surname, age: age }, user.id);
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <div>
      {edit ? (
        <input value={name} onChange={(event) => setName(event.target.value)} />
      ) : (
        <span>Name: {user.name} </span>
      )}

      {edit ? (
        <input
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
      ) : (
        <span>Surname: {user.surname} </span>
      )}

      {edit ? (
        <input value={age} onChange={(event) => setAge(event.target.value)} />
      ) : (
        <span>Age: {user.age} </span>
      )}

      <span>Забанен: {user.banned ? "Да" : "Нет"} </span>
      <button onClick={() => banUser(user.id)}>Забанить</button>
      <button onClick={editUser}>Изменить</button>
    </div>
  );
};

export default User;
