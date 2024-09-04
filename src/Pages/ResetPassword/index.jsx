import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";
import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import Image from "../../components/ui/Image";
import TabletImage from "./../../assets/tablet.png";

const ResetPassword = () => {
  return (
    <ScreenFitWrapper>
      <Container flexDirection="row">
        <div className="content-section">
          <PageHeader
            pageTitle="Set a new password"
            pageSubTitle="Please set a new password for your account here. "
          />
          <ResetPasswordForm />
        </div>
        <Image classes="illustration" src={TabletImage} alt="Tablet" />
      </Container>
    </ScreenFitWrapper>
  );
};

export default ResetPassword;
