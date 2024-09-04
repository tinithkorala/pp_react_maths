import { Container } from "@mui/material";
import PlannedQuiz from "../../components/quiz/PlannedQuiz";
import PageHeader from "../../components/ui/PageHeader";
import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";

const PlacementQuiz = () => {
  return (
    <ScreenFitWrapper>
      <Container
       flexDirection="column">
        <div
          className="content-section"
          style={{ width: "100%", marginTop: "100px" }}
        >
          <div style={{ width: "100%" }}>
            <PageHeader
              textAlign="center"
              pageTitle="Placement Test"
              pageSubTitle="This placement test will help us determine your level."
            />
            <PlannedQuiz
              itemPerPage={2}
              fetchUrl="/quiz/placement"
              submitUrl="/quiz/placement"
              answerKey="answers"
              navigateTo="/learning-type-quiz"
            />
          </div>
        </div>
      </Container>
    </ScreenFitWrapper>
  );
};

export default PlacementQuiz;
