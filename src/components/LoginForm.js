import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUsername, setIsLogin }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setUsername(data.username);
    setIsLogin(true);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 400, margin: "0 auto" }}
    >
      <Typography variant="h5" gutterBottom>
        Login Form
      </Typography>

      {/* Username Field */}
      <Controller
        name="username"
        control={control}
        defaultValue=""
        rules={{ required: "Username is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.username}
            helperText={errors.username ? errors.username.message : ""}
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiFormHelperText-root": {
                color: "white",
              },
            }}
          />
        )}
      />

      {/* Password Field */}
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiFormHelperText-root": {
                color: "white",
              },
            }}
          />
        )}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        style={{
          marginTop: "1rem",
          backgroundColor: "#d84943",
          color: "white",
        }}
      >
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
