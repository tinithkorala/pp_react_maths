import { Grid } from "@mui/material";
import Heading from "../../text/Heading";

const Section = ({ title, children }) => {
  return (
    <Grid container sx={{ mb: 4 }}>
      <Heading>{title}</Heading>
      <Grid container spacing={6}>{children}</Grid>
    </Grid>
  );
};

export default Section;
