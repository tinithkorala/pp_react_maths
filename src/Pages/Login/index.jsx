import LoginForm from "../../components/forms/LoginForm";
import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";
import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import Image from "../../components/ui/Image";
import PlanetImage from "./../../assets/planets.png";

const Login = () => {
  return (
    <ScreenFitWrapper>
      <Container flexDirection="row">
        <div className="content-section">
          <PageHeader
            pageTitle="Login"
            pageSubTitle="Login to access your Mathbuddy account"
          />
          <LoginForm />
        </div>
        <Image classes="illustration" src={PlanetImage} alt="Planets" />
      </Container>
    </ScreenFitWrapper>
  );
};

export default Login;
