import { Grid } from "@mui/material";
import Paper from "../Paper";
import CardHeading from "../../text/CardHeading";
import ProgessBar from "./../ProgressBar";

const ProgressBarList = ({ list, title }) => {
  return (
    <Paper>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <CardHeading>{title}</CardHeading>
      </Grid>
      {list?.map((item) => (
        <Grid item xs={12} key={item?.id}>
          <ProgessBar
            value={item?.value}
            color={item?.color}
            text={item?.text}
          />
        </Grid>
      ))}
    </Paper>
  );
};

export default ProgressBarList;
