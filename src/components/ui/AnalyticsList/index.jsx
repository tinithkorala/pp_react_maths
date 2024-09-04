import { Grid, Typography , Stack} from "@mui/material";
import Paper from "../Paper";
import CardHeading from "../../text/CardHeading";
import classes from "./index.module.css";

const AnalyticsList = ({ list, title }) => {
  return (
    <Paper>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <CardHeading>{title}</CardHeading>
      </Grid>
      <Grid container spacing={3}>
        {list?.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={item?.id}>
            <Paper>
              <Stack
                direction="column"
                gap={5}
              >
                <Typography className={classes['card-title']}>
                  {item?.title}
                </Typography>

                <Typography className={classes['card-value']}>
                  {item?.value}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default AnalyticsList;
