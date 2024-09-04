// import { useState } from "react";
// import classes from "./index.module.css";
import FormWrapper from "../../ui/FormWrapper";
import {
  Grid
} from "@mui/material";
import Button from "../../ui/Button";

const SelectProfilePicForm = () => {

  const onClickContinueButton = () => {
    console.log("onClickContinueButton");
  }

  return (
    <>
      <FormWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 0 }}>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Button
              variant="contained"
              fullWidth={false}
              size="large"
              onClick={onClickContinueButton}
              style={{ minWidth: '300px'}}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </FormWrapper>
    </>
  );
};

export default SelectProfilePicForm;
