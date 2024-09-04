// import classes from "./index.module.css";
import FormWrapper from "../../ui/FormWrapper";
import { Grid, TextField, Typography } from "@mui/material";
import Button from "../../ui/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../../features/thunks/authThunk";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const initialValues = {
  email: "",
};

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const onClickSendEmail = (values) => {
    console.log("onClickSendEmail");
    dispatch(forgotPassword(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      onClickSendEmail(values);
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
                Submit
              </Button>
            </Grid>
          </Grid>
        </FormWrapper>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
