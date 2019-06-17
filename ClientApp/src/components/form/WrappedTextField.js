import React from "react";
import TextField from "@material-ui/core/TextField";

export const WrappedTextField = ({
  label,
  name,
  values,
  onChange,
  opts = {}
}) => {
  return (
    <TextField
      label={label}
      name={name}
      value={values[name] || ""}
      onChange={onChange}
      fullWidth
      margin="normal"
      variant="outlined"
      {...opts}
    />
  );
};
