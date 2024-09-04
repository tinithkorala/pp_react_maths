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
import HeaderBar from "./../../../components/layouts/HeaderBar";
import TopicCard from "../../../components/cards/TopicCard";

const tileList = [
  {
    id: 1,
    text: "Complete Quizzes",
    icon: <SchoolOutlinedIcon />,
    value: 3,
  },
  {
    id: 2,
    text: "Topics Covered",
    icon: <EmojiObjectsOutlinedIcon />,
    value: 7,
  },
  {
    id: 3,
    text: "Questions Attempted",
    icon: <QueryBuilderOutlinedIcon />,
    value: 57,
  },
];

const myTopicsList = [
  {
    classString: "bg-low",
    cardTopic: "Math Operations with Real Numbers",
    dataSet: [
      { id: 0, value: 10, color: "#C0392B", label: "series A" },
      { id: 1, value: 15, color: "#D8837B", label: "series B" },
    ],
  },
  {
    classString: "bg-medium",
    cardTopic: "Finding the Perimeter",
    dataSet: [
      { id: 0, value: 10, color: "#FBF0C3", label: "series A" },
      { id: 1, value: 15, color: "#F4D041", label: "series B" },
    ],
  },
  {
    classString: "bg-high",
    cardTopic: "Area Optimization",
    dataSet: [
      { id: 0, value: 10, color: "#C9EAD7", label: "series A" },
      { id: 1, value: 15, color: "#39B56D", label: "series B" },
    ],
  },
  {
    classString: "bg-high",
    cardTopic: "Relationship Between Numbers",
    dataSet: [
      { id: 0, value: 10, color: "#C9EAD7", label: "series A" },
      { id: 1, value: 15, color: "#39B56D", label: "series B" },
    ],
  },
];

const barChartData = [
  { name: "Sunday", value: 10, color: "var(--cola-blue-300)" },
  { name: "Monday", value: 20, color: "var(--cola-blue-500)" },
  { name: "Tuesday", value: 40, color: "var(--ateneo-blue-300)" },
  { name: "Wednesday", value: 10, color: "var(--ateneo-blue-500)" },
  { name: "Thursday", value: 30, color: "var(--cola-blue-300)" },
  { name: "Friday", value: 25, color: "var(--cola-blue-500)" },
  { name: "Saturday", value: 15, color: "var(--ateneo-blue-300)" }
];

const StudentDashboard = () => {
  return (
    <Box>
      <HeaderBar pageTitle="Dashboard" />

      <Section title="Overview">
        <Grid item xs={12} md={3}>
          <TileList list={tileList} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper>
            <ChartContainer title="Study Overview">
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

      <Section title="MY TOPICS">
        {myTopicsList &&
          myTopicsList.map((el, key) => (
            <Grid item key={key} xs={12} md={3}>
              <TopicCard data={el} />
            </Grid>
          ))}
      </Section>
    </Box>
  );
};

export default StudentDashboard;
