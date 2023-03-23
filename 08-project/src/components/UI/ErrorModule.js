import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModule.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.modalonClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.modalTitle}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.modalMessage}</p>
      </div>
      <footer className={classes.action}>
        <Button onClick={props.modalonClick}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.modalonClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          modalTitle={props.modalTitle}
          modalMessage={props.modalMessage}
          modalonClick={props.modalonClick}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
