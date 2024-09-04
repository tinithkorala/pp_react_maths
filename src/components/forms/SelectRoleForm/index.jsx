import {
  FormControl,
  RadioGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import FormWrapper from "../../ui/FormWrapper";
import Button from "../../ui/Button";
import RoleOption from "../../ui/RoleOption";
import StudentImage from "./../../../assets/student.png";
import TeacherImage from "./../../../assets/teacher.png";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../../features/thunks/authThunk";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REQUEST_STATUS } from "../../../constants/constants";
import Loader from "../../ui/Loader";
import {
  selectError,
  selectStatus,
  selectUser,
} from "../../../features/slices/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  role: Yup.string().trim().required("Role is required"),
});

const initialValues = {
  role: "",
};

const SelectRoleForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    user?.role !== "user" && navigate("/set-photo");
  }, [user?.role, navigate]);

  const onClickContinueButton = (values) => {
    console.log("onClickContinueButton", values);
    dispatch(setRole(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      onClickContinueButton(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormWrapper>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={3}
              sx={{ width: "100%" }}
            >
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="role"
                  id="role"
                  name="role"
                  {...formik.getFieldProps("role")}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={3}
                    sx={{ width: "100%" }}
                  >
                    <RoleOption
                      role="student"
                      value={formik.values.role}
                      image={StudentImage}
                    />
                    <RoleOption
                      role="teacher"
                      value={formik.values.role}
                      image={TeacherImage}
                    />
                  </Stack>
                </RadioGroup>
              </FormControl>
            </Stack>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              {formik.touched.role && formik.errors.role ? (
                <Typography
                  color="error"
                  sx={{ width: "100%" }}
                  className="text-center"
                >
                  {formik.errors.role}
                </Typography>
              ) : null}
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ textAlign: "center", mt: 6 }}>
              <Button
                variant="contained"
                fullWidth={false}
                size="large"
                style={{ minWidth: "300px" }}
                type="submit"
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </FormWrapper>
      </form>

      {status == REQUEST_STATUS?.PENDING && <Loader text="Please wait..." />}

      {error && <p>Error : {error}</p>}
    </>
  );
};

export default SelectRoleForm;
