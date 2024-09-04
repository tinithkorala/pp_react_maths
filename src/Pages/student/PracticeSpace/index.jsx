import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import HeaderBar from "../../../components/layouts/HeaderBar";
import Section from "../../../components/ui/Section";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

// TODO:: Need fo focus on this component
const PracticeSpace = () => {
  return (
    <Box>
      <HeaderBar pageTitle="Practice Space" />

      <Section title="PROGRESS"></Section>

      <Section title="GENERAL PRACTICE">
        <Grid item md={12} sx={12}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent
              sx={{
                backgroundColor: "#003D78",
                position: "relative",
                height: 275,
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#56CCF2",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SchoolOutlinedIcon style={{ color: "white" }} />
                </div>
                <Typography
                  sx={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                  }}
                  gutterBottom
                >
                  18 topics • 18 questions
                </Typography>
              </Stack>
              <br />
              <Typography
                sx={{
                  fontSize: 14,
                  color: "white",
                }}
                gutterBottom
              >
                General Practice Quiz
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                }}
                gutterBottom
              >
                Embark on a quiz that spans your entire syllabus. Sharpen your
                skills from real numbers to probability, tackle interactive
                problems, and build confidence for your exams. Each question is
                a step toward math mastery
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <div></div>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    width: 300,
                    backgroundColor: "#0281D8",
                    color: "white",
                  }}
                >
                  START SESSION
                </Button>
                <img
                  src={`${
                    import.meta.env.VITE_API_BASE_URL
                  }/img/sub-topics/boy_think.png`}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Section>

      <Section title="TOPIC PRACTICE">
        <Grid item md={12} sx={12}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent
              sx={{
                backgroundColor: "#003D78",
                position: "relative",
                height: 275,
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#56CCF2",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SchoolOutlinedIcon style={{ color: "white" }} />
                </div>
                <Typography
                  sx={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                  }}
                  gutterBottom
                >
                  • 5 curated questions based on your level
                </Typography>
              </Stack>
              <br />
              <Typography
                sx={{
                  fontSize: 14,
                  color: "white",
                }}
                gutterBottom
              >
                General Practice Quiz
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                }}
                gutterBottom
              >
                This will be practice for you based on your current level in
                each topic.
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <div></div>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    width: 300,
                    backgroundColor: "#0281D8",
                    color: "white",
                  }}
                >
                  VIEW SUBTOPICS
                </Button>
                <img
                  src={`${
                    import.meta.env.VITE_API_BASE_URL
                  }/img/sub-topics/boy_think.png`}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Section>
    </Box>
  );
};

export default PracticeSpace;
