import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useForm } from "../hooks/useForm";
import { WrappedTextField } from "../components/form/WrappedTextField";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import { reduxHandleLogin } from "../redux/actions/authActions";

const styles = {
  container: {},
  title: {
    marginBottom: 20,
    textAlign: "center",
    boxShadow:
      "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
    position: "relative",
    marginTop: "-40px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "22px",
    backgroundColor: "#673ab7",
    borderRadius: "4px"
  },
  card: {
    padding: "20px 30px"
  },
  buttonRow: {
    marginTop: 20,
    textAlign: "left"
  },
  loginButton: {
    backgroundColor: "#673ab7",
    color: "white"
  }
};

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = dispatch => {
  return { 
    login: values => dispatch(reduxHandleLogin(values)) 
  };
};

export const LoginPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const handleLogin = () => {
    props.login(values);
    props.history.push("/")
  };

  const { handleSubmit, handleChange, values } = useForm(handleLogin);

  const sharedInputProps = {
    values,
    onChange: handleChange
  };

  return (
    <div className="centered-container">
      <Container maxWidth="xs" style={styles.container}>
        <Paper style={styles.card}>
          <Typography variant="h2" component="h2" style={styles.title}>
            Login
          </Typography>

          <form noValidate autoComplete="off">
            <WrappedTextField
              label="username"
              name="username"
              {...sharedInputProps}
            />

            <WrappedTextField
              label="password"
              name="password"
              {...sharedInputProps}
            />

            <div style={styles.buttonRow}>
              <Button
                style={styles.loginButton}
                size="large"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}));
