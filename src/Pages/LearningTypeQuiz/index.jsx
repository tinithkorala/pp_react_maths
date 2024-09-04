import { Container } from "@mui/material";
import PlannedQuiz from "../../components/quiz/PlannedQuiz";
import PageHeader from "../../components/ui/PageHeader";
import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";

const LearningTypeQuiz = () => {
  return (
    <>
      <ScreenFitWrapper>
        <Container flexDirection="column">
          <div
            className="content-section"
            style={{ width: "100%", marginTop: "100px" }}
          >
            <div style={{ width: "100%" }}>
              <PageHeader
                textAlign="center"
                pageTitle="Learning Type Test"
                pageSubTitle="This test will help us determine your preferred learning method."
              />
              <PlannedQuiz />
            </div>
          </div>
        </Container>
      </ScreenFitWrapper>
    </>
  );
};

export default LearningTypeQuiz;
