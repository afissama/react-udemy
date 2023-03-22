import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredUserAge, setUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }

    setUserAge("");
    setUserName("");
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const clickHandler = () => {};

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={userNameChangeHandler}
          id="username"
          value={enteredUserName}
          type="text"
        />

        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          value={enteredUserAge}
          onChange={ageChangeHandler}
          type="number"
        />
        <Button btnType="submit" onClick={clickHandler}>
          {" "}
          Add User{" "}
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
