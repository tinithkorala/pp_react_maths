import { useState } from "react";
// import classes from "./index.module.css";
import FormWrapper from "../../ui/FormWrapper";
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import Button from "../../ui/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../features/thunks/authThunk";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  password: "",
  confirmPassword: "",
};

const ResetPasswordForm = () => {
  const { passwordResetToken } = useParams();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleClickShowPassword = () => {
    console.log("handleClickShowPassword");
    setShowPassword((showPassword) => {
      return {
        ...showPassword,
        password: !showPassword?.password,
      };
    });
  };

  const handleClickShowConfirmPassword = () => {
    console.log("handleClickShowConfirmPassword");
    setShowPassword((showPassword) => {
      return {
        ...showPassword,
        confirmPassword: !showPassword?.confirmPassword,
      };
    });
  };

  const handleMouseDownPassword = (event) => {
    console.log("handleMouseDownPassword");
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (event) => {
    console.log("handleMouseDownConfirmPassword");
    event.preventDefault();
  };

  const onClickSetPassword = (values) => {
    dispatch(resetPassword({ ...values, passwordResetToken }));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      onClickSetPassword(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel
                  htmlFor="password"
                  shrink
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                >
                  Create Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword?.password ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ padding: "12px", marginRight: 0 }}
                      >
                        {showPassword?.password ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
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
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel
                  htmlFor="confirmPassword"
                  shrink
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                >
                  Re Enter Password
                </InputLabel>
                <OutlinedInput
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword?.confirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                        sx={{ padding: "12px", marginRight: 0 }}
                      >
                        {showPassword?.confirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  {...formik.getFieldProps("confirmPassword")}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                />
              </FormControl>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <Typography color="error">
                  {formik.errors.confirmPassword}
                </Typography>
              ) : null}
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 0 }}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth={true}
                size="large"
                type="submit"
                disabled={!formik.isValid}
              >
                Set Password
              </Button>
            </Grid>
          </Grid>
        </FormWrapper>
      </form>
    </>
  );
};

export default ResetPasswordForm;
