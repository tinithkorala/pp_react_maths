import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";
import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import Image from "./../../components/ui/Image";
import Button from "./../../components/ui/Button";
import Error404Image from "./../../assets/404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {

    const navigate = useNavigate();

  return (
    <ScreenFitWrapper>
      <Container flexDirection="column">
        <div className="content-section" style={{ width: "80%" }}>
          <PageHeader
            textAlign="center"
            pageTitle="We lost this page"
            pageSubTitle="We searched high and low but couldn’t find what you’re looking for. Let’s find a better place for you to go."
          />
        </div>
        <Image classes="illustration" src={Error404Image} alt="404" />

        <Button
          variant="contained"
          fullWidth={false}
          size="large"
          style={{ minWidth: "300px" }}
          onClick={()=>{ navigate("/") }}
        >
          Return Home
        </Button>
      </Container>
    </ScreenFitWrapper>
  );
};

export default ErrorPage;
