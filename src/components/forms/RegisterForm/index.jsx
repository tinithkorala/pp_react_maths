import { useEffect, useState } from "react"; // import classes from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
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
import { REQUEST_STATUS } from "../../../constants/constants";
import Button from "../../ui/Button";
import Loader from "../../ui/Loader";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuthenticate,
  selectStatus,
  selectError,
} from "../../../features/slices/authSlice";
import { signUp } from "../../../features/thunks/authThunk";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9]{1,3}[0-9]{9}$/, "Invalid phone number")
    .required("Phone Number is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  terms_conditions: Yup.boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required("Please accept the terms and conditions"),
});

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirm: "",
  terms_conditions: false,
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticate);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
    isAuthenticated && navigate("/set-role");
  }, [isAuthenticated, navigate]);

  const [showPassword, setShowPassword] = useState({
    password: false,
    passwordConfirm: false,
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
        passwordConfirm: !showPassword?.passwordConfirm,
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

  const onClickCreateAccountButton = async (values) => {
    console.log("onClickCreateAccountButton", values);
    dispatch(signUp(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onClickCreateAccountButton(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                id="first_name"
                name="first_name"
                type="text"
                placeholder="john"
                InputLabelProps={{
                  shrink: true,
                }}
                {...formik.getFieldProps("first_name")}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <Typography color="error">
                  {formik.errors.first_name}
                </Typography>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                id="last_name"
                name="last_name"
                type="text"
                placeholder="doe"
                InputLabelProps={{
                  shrink: true,
                }}
                {...formik.getFieldProps("last_name")}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <Typography color="error">{formik.errors.last_name}</Typography>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                id="email"
                name="email"
                type="email"
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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                id="phone"
                name="phone"
                type="text"
                placeholder="+94"
                InputLabelProps={{
                  shrink: true,
                }}
                {...formik.getFieldProps("phone")}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <Typography color="error">{formik.errors.phone}</Typography>
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
                  htmlFor="passwordConfirm"
                  shrink
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                >
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type={showPassword?.passwordConfirm ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                        sx={{ padding: "12px", marginRight: 0 }}
                      >
                        {showPassword?.passwordConfirm ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm password"
                  {...formik.getFieldProps("passwordConfirm")}
                  error={
                    formik.touched.passwordConfirm &&
                    Boolean(formik.errors.passwordConfirm)
                  }
                />
              </FormControl>
              {formik.touched.passwordConfirm &&
              formik.errors.passwordConfirm ? (
                <Typography color="error">
                  {formik.errors.passwordConfirm}
                </Typography>
              ) : null}
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <FormGroup>
                  <FormControlLabel
                    value="agree"
                    control={
                      <Checkbox
                        id="terms_conditions"
                        name="terms_conditions"
                        sx={{
                          color: "val(--base-text-color)",
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                        }}
                        {...formik.getFieldProps("terms_conditions")}
                      />
                    }
                    label={
                      <span style={{ color: "val(--base-text-color)" }}>
                        I agree to all the <Link to="/terms">Terms</Link> and{" "}
                        <Link to="/privacy-policies">Privacy Policies</Link>
                      </span>
                    }
                    labelPlacement="end"
                  />

                  {formik.touched.terms_conditions &&
                  formik.errors.terms_conditions ? (
                    <Typography color="error">
                      {formik.errors.terms_conditions}
                    </Typography>
                  ) : null}
                </FormGroup>
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
                Create account
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography variant="subtitle1" color="initial">
                {`Already have an account?`} <Link to="/sign-in">Login</Link>
              </Typography>
            </Grid>
          </Grid>
        </FormWrapper>
      </form>
      {status == REQUEST_STATUS?.PENDING && <Loader text="Please wait..." />}

      {error && <p>{error}</p>}
    </>
  );
};

export default RegisterForm;
