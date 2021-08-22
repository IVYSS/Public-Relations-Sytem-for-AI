import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import "./Login.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: "19px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "19px",
    background: "#2589ff",
  },
  input: {
    width: "90%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "19px",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    border: "none",
    fontSize: "1.2em",
  },
  label: {
    width: "80%",
    textAlign: "left",
  },
  logo: {
    width: "80%",
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img src="/ogimage.png" alt="" className={classes.logo} />
        <form className={classes.form}>
          <p className={classes.label}>Username</p>
          <input className={classes.input} type="text" name="username" />
          <p className={classes.label}>Password</p>
          <input className={classes.input} type="password" name="password" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
