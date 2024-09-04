import { useState, useCallback } from "react";
// import classes from "./index.module.css";
import { Link } from "react-router-dom";
import FormWrapper from "../../ui/FormWrapper";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import Button from "./../../ui/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { signIn } from "../../../features/thunks/authThunk";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const onClickRememberMe = useCallback(() => {
    console.log("Remember me");
  }, []);

  const onClickLoginButton = useCallback((values) => {
    // TODO :: Pass correct user data
    dispatch(
      signIn(values)
    );
  }, [dispatch]);

  const handleClickShowPassword = () => {
    console.log("handleClickShowPassword");
    setShowPassword((showPassword) => !showPassword);
  };

  const handleMouseDownPassword = (event) => {
    console.log("handleMouseDownPassword");
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      onClickLoginButton(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                id="email"
                name="email"
                type="text"
                placeholder="john.doe@gmail.com"
                InputLabelProps={{
                  shrink: true,
                }}
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              {formik.touched.email && formik.errors.email ? (
                <Typography color="error">{formik.errors.email}</Typography>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel
                  htmlFor="password"
                  shrink
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ padding: "12px", marginRight: 0 }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  {...formik.getFieldProps("password")}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
              </FormControl>
              {formik.touched.password && formik.errors.password ? (
                <Typography color="error">{formik.errors.password}</Typography>
              ) : null}
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ width: "100%" }}
                  onClick={onClickRememberMe}
                >
                  <FormGroup>
                    <FormControlLabel
                      value="rememberMe"
                      control={
                        <Checkbox
                          id="rememberMe"
                          name="rememberMe"
                          sx={{
                            color: "val(--base-text-color)",
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                          }}
                          {...formik.getFieldProps("rememberMe")}
                        />
                      }
                      label={
                        <span style={{ color: "val(--base-text-color)" }}>
                          Remember me
                        </span>
                      }
                      labelPlacement="end"
                      onClick={onClickRememberMe}
                    />
                  </FormGroup>
                </Stack>
                <Grid sx={{ width: 200 }}>
                  <Typography>
                    <Link to="/forgot-password">Forgot Password</Link>
                  </Typography>
                </Grid>
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth={true}
                size="large"
                type="submit"
                disabled={!formik.isValid}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography>
                {`Don't have an account?`}{" "}
                <Link to="/sign-up">Register here</Link>
              </Typography>
            </Grid>
          </Grid>
        </FormWrapper>
      </form>
    </>
  );
};

export default LoginForm;
