import { FormControlLabel, Radio, Typography } from "@mui/material";
import Image from "./../Image";

const RoleOption = ({ role, value, image }) => {
  return (
    <FormControlLabel
      value={role}
      control={<Radio sx={{ display: "none" }} />}
      label={
        <>
          <Image
            classes={`clickable ${value === role && "selected"}`}
            alt={role}
            style={{ minWidth: "20%" }}
            src={image}
          />
          <Typography
            className="text-center"
            sx={{ mt: 2, textTransform: "capitalize" }}
          >
            {role}
          </Typography>
        </>
      }
    />
  );
};

export default RoleOption;
