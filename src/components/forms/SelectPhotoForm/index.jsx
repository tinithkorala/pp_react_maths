import { Grid, Stack, Typography, Avatar } from "@mui/material";
import FormWrapper from "../../ui/FormWrapper";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { REQUEST_STATUS } from "../../../constants/constants";
import Loader from "../../ui/Loader";
import {
  selectError,
  selectStatus,
  selectUser,
} from "../../../features/slices/authSlice";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { setPhoto } from "../../../features/thunks/authThunk";

const initialValues = {
  photo: "",
};

const SelectPhotoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const onClickContinueButton = (values) => {
    console.log("onClickContinueButton", values);

    const formData = new FormData();
    formData.append("photo", values.photo);

    dispatch(setPhoto(formData));
    if (user?.role === "teacher") {
      navigate("/teacher");
    } else {
      navigate("/placement-quiz");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("Form data", values);
      onClickContinueButton(values);
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      formik.setFieldValue("photo_preview", reader.result);
    };
    if (file) {
      formik.setFieldValue("photo", file);
      reader.readAsDataURL(file);
    }
  };

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
              <Stack
                direction="column"
                alignItems="center"
                gap={2}
                sx={{ width: "100%" }}
              >
                <label htmlFor="avatarInput">
                  <Avatar
                    alt="Avatar"
                    src={formik?.values?.photo_preview}
                    sx={{
                      width: 250,
                      height: 250,
                      cursor: "pointer",
                      backgroundColor: "transparent",
                      border: "2px solid var(--ateneo-blue-500)",
                      borderRadius: "var(--border-radius)",
                      boxShadow: "var(--shadow-base)",
                    }}
                    variant={formik?.values?.photo ? "circular" : "rounded"}
                  >
                    <AddIcon
                      sx={{
                        width: "100px",
                        height: "100px",
                        color: "var(--ateneo-blue-500)",
                      }}
                    />
                  </Avatar>
                </label>
                <input
                  id="avatarInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                {formik?.values?.photo && (
                  <Typography align="center">
                    Perfect! <br />
                    Click continue to get started.
                  </Typography>
                )}
              </Stack>
            </Stack>
          </Grid>

          <Grid container spacing={3}>
            <Grid xs={12} sx={{ textAlign: "center", mt: 12 }}>
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

export default SelectPhotoForm;
