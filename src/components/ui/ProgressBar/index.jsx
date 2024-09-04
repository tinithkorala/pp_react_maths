import { Box, Typography, Grid } from "@mui/material";
import classes from "./index.module.css";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
  height: 12,
  borderRadius: "100px",
  marginTop: "6px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: `var(--diamond-blue-100)`,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background:
      color === "success"
        ? "linear-gradient(to right, #2fea9b, #7fdd53)"
        : "linear-gradient(to right, #FFBF1A, #FF4080)",
  },
}));

const ProgessBar = ({ value, color, text }) => {
  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Typography className={classes["progress-text"]}>{text}</Typography>
      <Grid container>
        <Grid item xs={12} sm={9} md={9}>
          <BorderLinearProgress
            variant="determinate"
            color={color}
            value={value}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          className={classes["progress-value-wrapper"]}
        >
          <Typography className={classes["progress-value"]}>
            {value}%{" "}
            <span style={{ color: "var(--gray-800) !important" }}>Correct</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProgessBar;
