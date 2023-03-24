import React, { useContext, useReducer, useRef, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "EMAIL_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const pswReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "PSW_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [pswState, dispatchPsw] = useReducer(pswReducer, {
    value: "",
    isValid: false,
  });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //     setFormIsValid(
  //       enteredPassword.trim().length > 6 && enteredEmail.includes("@")
  //     );
  //   }, 500);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailref = useRef();
  const paswref = useRef();

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    //setFormIsValid(enteredPassword.trim().length > 6 && emailState.isValid);
    setFormIsValid(pswState.isValid && emailState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPsw({ type: "USER_INPUT", val: event.target.value });
    // setEnteredPassword(event.target.value);
    setFormIsValid(emailState.isValid && pswState.isValid);
  };

  const ctxAuth = useContext(AuthContext);

  const validateEmailHandler = () => {
    dispatchEmail({ type: "EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPsw({ type: "PSW_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctxAuth.onLogin(emailState.value, pswState.value);
    } else if (!emailState.isValid) {
      emailref.current.focus();
    } else {
      paswref.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailref}
          id="email"
          label="E-mail"
          type="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
