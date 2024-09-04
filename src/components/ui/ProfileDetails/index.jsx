import { Stack, Typography } from "@mui/material";

const ProfileDetails = ({title,value}) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      sx={{ fontSize: "var(--large-font-size)", mb: 4 }}
    >
      <Typography sx={{ width: "200px", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
};

export default ProfileDetails;
