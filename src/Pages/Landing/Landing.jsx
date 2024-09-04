import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";
import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import Image from "../../components/ui/Image";
import LandingImage from "./../../assets/landing.png";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

const Landing = () => {

  const navigate = useNavigate();

  return (
    <ScreenFitWrapper>
      <Container flexDirection="row">
        <div className="content-section">
          <PageHeader
            pageTitle="Your space to practice without exams"
            pageSubTitle="Unlock the secrets of mathematics with our interactive learning platform, designed to build your knowledge and skills in grade 10 and 11 math topics. Whether you're just starting out or brushing up on complex concepts, our personalized approach adapts to your learning pace and style."
          />
          <Button
            variant="contained"
            fullWidth={false}
            size="large"
            style={{ minWidth: "300px", marginTop: '30px' }}
            onClick={()=>{ navigate("/") }}
          >Start Learning Now</Button>
        </div>
        <Image classes="illustration" src={LandingImage} alt="Planets" />
      </Container>
    </ScreenFitWrapper>
  );
};

export default Landing;
