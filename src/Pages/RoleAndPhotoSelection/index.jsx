import SelectRoleForm from "../../components/forms/SelectRoleForm";
import SelectProfilePicForm from "../../components/forms/SelectProfilePicForm";
import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";
import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import { Grid, Stack, Box } from "@mui/material";
import classes from "./index.module.css";
import { useState } from "react";

const RoleAndPhotoSelection = () => {
  const handleSetUserRole = (value) => {
    console.log("handleSetUserRole", value);
    const mutatedSteps = steps?.map((step) => {
      if (step?.id === 1) {
        return {
          ...step,
          value: value,
        };
      }
      return step;
    });
    setSteps(mutatedSteps);
    setActiveStep(1);
  };

  const handleSetUserProfilePic = (value) => {
    console.log("handleSetUserProfilePic", value);
    const mutatedSteps = steps?.map((step) => {
      if (step?.id === 2) {
        return {
          ...step,
          value: value,
        };
      }
      return step;
    });
    setSteps(mutatedSteps);
  };

  const initialSteps = [
    {
      id: 1,
      title: "Tell us a bit more about yourself",
      subTitle: "Are you joining as a student or are you a teacher?",
      content: <SelectRoleForm onContinue={handleSetUserRole} />,
      value: "",
    },
    {
      id: 2,
      title: "Make sure your everyone knows you",
      subTitle:
        "It helps if your profile picture is updated for everyone for everyone in your class",
      content: <SelectProfilePicForm onContinue={handleSetUserProfilePic} />,
      value: "",
    },
  ];

  const [steps, setSteps] = useState(initialSteps);

  const [activeStep, setActiveStep] = useState(0);

  return (
    <ScreenFitWrapper>
      <Container flexDirection="column">
        {/* Stepper */}
        <Grid container spacing={3} sx={{ px: "150px", mb: 4 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            sx={{ width: "100%" }}
          >
            {steps?.map((step, index) => (
              <Box
                key={index}
                className={`${classes?.step} ${
                  step?.value !== "" && classes.completed
                }`}
              ></Box>
            ))}
          </Stack>
        </Grid>

        <div className="content-section" style={{ width: "80%" }}>
          {/* Content */}
          {steps?.map(
            (step, index) =>
              index === activeStep && (
                <div key={index} style={{ width: "100%" }}>
                  <PageHeader
                    textAlign="center"
                    pageTitle={step?.title}
                    pageSubTitle={step?.subTitle}
                  />
                  {step?.content}
                </div>
              )
          )}
        </div>
      </Container>
    </ScreenFitWrapper>
  );
};

export default RoleAndPhotoSelection;
