import { Box, Grid, Typography, Stack, Avatar } from "@mui/material";
import HeaderBar from "./../../../components/layouts/HeaderBar";
import ProgressBarList from "../../../components/ui/ProgressBarList";
import Button from "./../../../components/ui/Button";
import GetAppIcon from "@mui/icons-material/GetApp";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProfileDetails from "../../../components/ui/ProfileDetails";
import AnalyticsList from "../../../components/ui/AnalyticsList";

const strongestTopicsList = [
  {
    id: 1,
    text: "Relationships Between Numbers",
    value: 95,
    color: "success",
  },
  {
    id: 2,
    text: "Units and Fractions",
    value: 92,
    color: "success",
  },
  {
    id: 3,
    text: "Data Representation",
    value: 89,
    color: "success",
  },
];

const weakestTopicsList = [
  {
    id: 1,
    text: "Probability",
    value: 36,
    color: "warning",
  },
  {
    id: 2,
    text: "Sets and their Applications",
    value: 52,
    color: "warning",
  },
  {
    id: 3,
    text: "Algebraic Expressions",
    value: 52,
    color: "warning",
  },
];

const quizAnalyticsList = [
  { id: 1, title: "Number of Quizzes", value: "25" },
  { id: 2, title: "Average Quiz Score", value: "80/100" },
  { id: 3, title: "Average Quiz Duration", value: "2m 34s" },
];

const SingleStudentPerformace = () => {
  const handleDownload = () => {
    console.log("handleDownload");
  };
  return (
    <Box>
      <HeaderBar pageTitle="Student Performace" />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 6 }}
      >
        <Typography sx={{ display: "flex" }}>
          <ArrowBackIosIcon sx={{ color: "var(--ateneo-blue-300)" }} />
          <Link to="/teacher/performance-list">Back</Link>
        </Typography>

        <Button
          type="button"
          variant="text"
          onClick={handleDownload}
          size="small"
          style={{
            color: "var(--text-button-color)",
            float: "right",
            fontSize: "var(--base-font-size) !important",
          }}
          startIcon={<GetAppIcon sx={{ height: "30px", width: "30px" }} />}
        >
          Download
        </Button>
      </Stack>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={3}>
            <Grid item sm={12} lg={5}>
              <Avatar
                alt="Profile Pic"
                src="/static/images/avatar/1.jpg"
                sx={{
                  width: "250px",
                  height: "250px",
                }}
              />
            </Grid>
            <Grid item sm={12} lg={7} sx={{mt:5}}>
              <ProfileDetails title="First Name" value="John" />
              <ProfileDetails title="Last Name" value="Doe" />
              <ProfileDetails title="Learning Type" value="Visual" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <ProgressBarList
            list={strongestTopicsList}
            title="Strongest topics"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{mt: 1}}>
        <Grid item xs={12} md={7}>
          <AnalyticsList list={quizAnalyticsList} title="Quiz Analytics" />
        </Grid>

        <Grid item xs={12} md={5}>
          <ProgressBarList list={weakestTopicsList} title="Weakest topics" />
        </Grid>
      </Grid>

    </Box>
  );
};

export default SingleStudentPerformace;
