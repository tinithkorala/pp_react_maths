import SelectRoleForm from "../../components/forms/SelectRoleForm";
import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";
import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import { ROLE_PHOTO_SELECTION } from "../../constants/constants";
import Stepper from "../../components/ui/Stepper";

const SetRole = () => {
  return (
    <ScreenFitWrapper>
      <Container flexDirection="column">

        <Stepper stepType="role" />

        <div className="content-section" style={{ width: "80%" }}>
          {ROLE_PHOTO_SELECTION?.filter((item) => item?.type === "role")?.map(
            (step, index) => (
              <div key={index} style={{ width: "100%" }}>
                <PageHeader
                  textAlign="center"
                  pageTitle={step?.title}
                  pageSubTitle={step?.subTitle}
                />
                <SelectRoleForm />
              </div>
            )
          )}
        </div>
      </Container>
    </ScreenFitWrapper>
  );
};

export default SetRole;
