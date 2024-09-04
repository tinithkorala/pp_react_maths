import SelectPhotoForm from "../../components/forms/SelectPhotoForm";
import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";
import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import { ROLE_PHOTO_SELECTION } from "../../constants/constants";
import Stepper from "../../components/ui/Stepper";

const SetPhoto = () => {
  return (
    <ScreenFitWrapper>
      <Container flexDirection="column">
 
        <Stepper stepType="photo" />

        <div className="content-section" style={{ width: "80%" }}>
          {ROLE_PHOTO_SELECTION?.filter((item) => item?.type === "photo")?.map(
            (step, index) => (
              <div key={index} style={{ width: "100%" }}>
                <PageHeader
                  textAlign="center"
                  pageTitle={step?.title}
                  pageSubTitle={step?.subTitle}
                />
                <SelectPhotoForm />
              </div>
            )
          )}
        </div>
      </Container>
    </ScreenFitWrapper>
  );
};

export default SetPhoto;
