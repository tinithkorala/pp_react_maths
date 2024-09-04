import { Box, Grid } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import Paper from "../../../components/ui/Paper";
import BarChart from "../../../components/charts/BarChart";
import DonutChart from "../../../components/charts/DonutChart";
import ChartContainer from "../../../components/charts/ChartContainer";
import Section from "../../../components/ui/Section";
import TileList from "../../../components/ui/TileList";
import ProgressBarList from "../../../components/ui/ProgressBarList";
import HeaderBar from "./../../../components/layouts/HeaderBar";

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

const tileList = [
  {
    id: 1,
    text: "Total students",
    icon: <SchoolOutlinedIcon />,
    value: 120,
  },
  {
    id: 2,
    text: "Average quiz score",
    icon: <EmojiObjectsOutlinedIcon />,
    value: 85,
  },
  {
    id: 3,
    text: "Average quizzes attemped",
    icon: <QueryBuilderOutlinedIcon />,
    value: 5,
  },
];

const barChartData = [
  { name: "Visual", value: 10, color: "var(--cola-blue-300" },
  { name: "Auditory", value: 20, color: "var(--cola-blue-500)" },
  { name: "Kinesthetic", value: 40, color: "var(--ateneo-blue-300)" },
  { name: "Reading", value: 10, color: "var(--ateneo-blue-500)" },
];

const TeacherDashboard = () => {
  return (
    <Box>

      <HeaderBar pageTitle="Dashboard" />

      <Section title="Overview">
        <Grid item xs={12} md={3}>
          <TileList list={tileList} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper>
            <ChartContainer title="Learning Type Distribution">
              <BarChart data={barChartData} />
            </ChartContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper>
            <ChartContainer title="Quiz Average">
              <DonutChart />
            </ChartContainer>
          </Paper>
        </Grid>
      </Section>

      <Section title="Topic Performance">
        <Grid item xs={12} md={6}>
          <ProgressBarList
            list={strongestTopicsList}
            title="Strongest topics"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ProgressBarList list={weakestTopicsList} title="Weakest topics" />
        </Grid>
      </Section>
    </Box>
  );
};

export default TeacherDashboard;
