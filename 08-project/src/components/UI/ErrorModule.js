import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModule.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.modalTitle}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.modalMessage}</p>
        </div>
        <footer className={classes.action}>
          <Button>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
