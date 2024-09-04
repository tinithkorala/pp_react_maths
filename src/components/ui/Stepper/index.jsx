import { Box, Grid, Stack } from "@mui/material";
import classes from "./index.module.css";
import { ROLE_PHOTO_SELECTION } from "../../../constants/constants";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/slices/authSlice";

const Stepper = ({ stepType }) => {
  const user = useSelector(selectUser);

  return (
    <Grid container spacing={3} sx={{ px: "150px", mb: 4 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        sx={{ width: "100%" }}
      >
        {ROLE_PHOTO_SELECTION?.map((step, index) => (
          <Box
            key={index}
            className={`${classes?.step} ${
              stepType === "role" && user?.role !== "user"
                ? classes.completed
                : ""
            }`}
          ></Box>
        ))}
      </Stack>
    </Grid>
  );
};

export default Stepper;
