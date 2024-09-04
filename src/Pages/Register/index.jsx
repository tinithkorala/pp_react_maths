import RegisterForm from "../../components/forms/RegisterForm";
import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";
import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import Image from "../../components/ui/Image";
import ShipImage from "./../../assets/ship.png";

const Register = () => {
  return (
    <ScreenFitWrapper>
      <Container flexDirection="row">
        <div className="content-section">
          <PageHeader
            pageTitle="Register today"
            pageSubTitle="Let’s get you all started up so you can access your personal account."
          />
          <RegisterForm />
        </div>
        <Image classes="illustration" src={ShipImage} alt="Ship" />
      </Container>
    </ScreenFitWrapper>
  );
};

export default Register;
