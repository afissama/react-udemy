import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModule";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredUserAge, setUserAge] = useState("");
  const [msgError, setmsgError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setmsgError({
        title: "Invalid Input",
        msg: "Please enter valid iunputs",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setmsgError({
        title: "Invalid Age",
        msg: "Please enter valid age",
      });
      return;
    }
    props.onNewUser({
      name: enteredUserName,
      age: enteredUserAge,
      id: Math.random().toString(),
    });
    setUserAge("");
    setUserName("");
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const errorHandler = () =>{
    setmsgError(null);
  }

  const clickHandler = () => {};

  return (
    <div>
      {msgError && <ErrorModal modalTitle={msgError.title} modalMessage={msgError.msg} modalonClick={errorHandler} />}

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
    </div>
  );
};

export default AddUser;
