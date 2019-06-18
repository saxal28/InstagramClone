import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useForm } from "../hooks/useForm";
import { WrappedTextField } from "../components/form/WrappedTextField";

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

export const LoginPage = () => {
  const { handleSubmit, handleChange, values } = useForm(handleLogin);

  const handleLogin = () => {
    let url = `${window.origin}/api/token`

    console.log("values", values)

    fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(data => {
        console.log("DATA!", data);
      })
      .catch(e => console.log("ERROR", e));
  };

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
              <Button style={styles.loginButton} size="large">
                Login
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
};
