import React from "react";
import classes from "./index.module.css";
import { Paper, Grid, Stack, Typography } from "@mui/material";

const Tile = ({ icon, text, value }) => {
  return (
    <Paper className={classes["tile"]} elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            justifyContent="flex-start"
            alignItems="center"
            direction="row"
            gap={1}
          >
            {React.cloneElement(icon, {
              className: classes["icon"],
            })}
            <Typography className={classes["text"]}>{text}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes["value"]}>{value}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Tile;
