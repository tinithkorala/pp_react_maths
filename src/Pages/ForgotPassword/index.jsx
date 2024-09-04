import ForgotPasswordForm from "../../components/forms/ForgotPasswordForm";
import ScreenFitWrapper from "../../components/ui/ScreenFitWrapper";
import Container from "../../components/ui/Container";
import PageHeader from "../../components/ui/PageHeader";
import Image from "../../components/ui/Image";
import InspectorImage from "./../../assets/inspector.png";
import { Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <ScreenFitWrapper>
      <Container flexDirection="row">

        <div className="content-section">

          <Grid container>
            <Grid item>
              <Typography sx={{ display: "flex" }}>
                <ArrowBackIosIcon sx={{ color: "var(--ateneo-blue-300)" }} />
                <Link to="/sign-in"> Back to login</Link>
              </Typography>
            </Grid>
          </Grid>

          <PageHeader
            pageTitle="Forgot your password?"
            pageSubTitle={`Don’t worry, happens to all of us. Enter your email below to recover your password.`}
          />
          
          <ForgotPasswordForm />

        </div>

        <Image
          classes="illustration"
          src={InspectorImage}
          alt="Inspector"
        />
      </Container>
    </ScreenFitWrapper>
  );
};

export default ForgotPassword;
