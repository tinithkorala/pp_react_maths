import { Box, Chip, Grid, Stack } from "@mui/material";
import HeaderBar from "../../../components/layouts/HeaderBar";
import SubTopicCard from "../../../components/cards/SubTopicCard";

const subTopics = [
  {
    name: "Mathematical Operations in Real Numbers",
    description:
      "Recognition, approximation, and division method for square roots",
    category: { name: "Number and Algebra", color: "#C0392B" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/boy_think.png`,
  },
  {
    name: "Relationships Between Numbers",
    description:
      "Arithmetic progressions identification, formula development, and problem-solving",
    category: { name: "Number and Algebra", color: "#C0392B" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/girl_think.png`,
  },
  {
    name: "Units and Fractions",
    description: "Problem-solving with fractions in daily life",
    category: { name: "Number and Algebra", color: "#C0392B" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/boy_think.png`,
  },
  {
    name: "Using Ratios",
    description: "Analysis and problem-solving in work and time contexts",
    category: { name: "Number and Algebra", color: "#C0392B" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/girl_think.png`,
  },
  {
    name: "Percentages for Transactions",
    description: "Calculations and decision-making with taxes and interest",
    category: { name: "Number and Algebra", color: "#C0392B" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/boy_think.png`,
  },
  {
    name: "Logarithms and Calculators",
    description:
      "Conversion between indices and logarithm forms, simplification of expressions, calculator use for solving problems",
    category: { name: "Number and Algebra", color: "#C0392B" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/girl_think.png`,
  },
  {
    name: "Finding the Perimeter",
    description:
      "Arc lengths, perimeter calculations for sectors and compound figures",
    category: { name: "Geometry and Measurement", color: "#8E5400" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/boy_think.png`,
  },
  {
    name: "Area Optimization",
    description:
      "Solving problems related to the area of plane figures, including sectors",
    category: { name: "Geometry and Measurement", color: "#8E5400" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/girl_think.png`,
  },
  {
    name: "Volume Calculations",
    description:
      "Awareness and problem-solving regarding the volumes of cylinders and prisms",
    category: { name: "Geometry and Measurement", color: "#8E5400" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/boy_think.png`,
  },
  {
    name: "Time Management",
    description:
      "Utilizing knowledge of distance, time, and speed for daily tasks",
    category: { name: "Geometry and Measurement", color: "#8E5400" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/girl_think.png`,
  },
  {
    name: "Scale Diagrams",
    description:
      "Use in practical situations, exploring methods for environmental locations",
    category: { name: "Geometry and Measurement", color: "#8E5400" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/boy_think.png`,
  },
  {
    name: "Algebraic Expressions",
    description:
      "Simplification by exploring various methods, including factorization and expansion",
    category: { name: "Number and Algebra", color: "#C0392B" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/girl_think.png`,
  },
  {
    name: "Algebraic Fractions",
    description:
      "Handling under addition, subtraction, and finding least common multiples",
    category: { name: "Number and Algebra", color: "#C0392B" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/boy_think.png`,
  },
  {
    name: "Equations and Inequalities",
    description:
      "Solving linear, simultaneous, and quadratic equations; analyzing inequalities",
    category: { name: "Number and Algebra", color: "#C0392B" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/girl_think.png`,
  },
  {
    name: "Geometric Relationships",
    description:
      "Investigating theorems related to triangles, parallelograms, and circles; constructing geometrical figures",
    category: { name: "Geometry and Measurement", color: "#8E5400" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/boy_think.png`,
  },
  {
    name: "Data Representation",
    description:
      "Extending frequency tables, graphical representation including pie charts",
    category: { name: "Statistics and Probability", color: "#005F3D" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/girl_think.png`,
  },
  {
    name: "Probability",
    description:
      "Analyzing events, representative values for prediction, and tree diagrams for compound events",
    category: { name: "Statistics and Probability", color: "#005F3D" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/boy_think.png`,
  },
  {
    name: "Sets and their Applications",
    description:
      "Denotation methods, problem-solving using sets, and set operations",
    category: { name: "Statistics and Probability", color: "#005F3D" },
    imageUrl: `${import.meta.env.VITE_API_BASE_URL}/img/sub-topics/girl_think.png`,
  },
];

const SubtopicList = () => {
  return (
    <Box>
      <HeaderBar pageTitle="Subtopic List" />
      <Stack direction="row" gap={1}>
        <Chip label="All" />
        <Chip label="Number and Algebra" variant="outlined" />
        <Chip label="Geometry" variant="outlined" />
        <Chip label="Statistics and Probability" variant="outlined" />
      </Stack>
      <Grid container sx={{ mt: 4 }}>
        {subTopics && subTopics.map((el, key) => <SubTopicCard data={el} key={key} />)}
      </Grid>
    </Box>
  );
};

export default SubtopicList;
