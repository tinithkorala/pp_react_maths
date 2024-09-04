import { useCallback } from "react";
import classes from "./index.module.css";
import Image from "./../Image";
import LogoImage from "./../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { useSelector } from "react-redux";
import { selectIsAuthenticate, selectUser } from "./../../../features/slices/authSlice";

const ScreenFitWrapper = ({ children }) => {

  const isAuthenticated = useSelector(selectIsAuthenticate);
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    console.log("logo clicked");
  }, []);
  return (
    <>
      <div className={classes["screen-fit-wrapper"]}>{children}</div>
      <div className={classes["logo"]}>
        <Link to="/">
          <Image
            style={{ width: "100px" }}
            src={LogoImage}
            onClick={onLogoClick}
            alt="Logo"
          />
        </Link>
        <div>
          {!isAuthenticated && <Button
            variant="outlined"
            fullWidth={false}
            size="large"
            style={{
              width: "120px",
              color: "var(--ateneo-blue-500)",
              border: "2px solid var(--ateneo-blue-500)",
              borderRadius: "var(--border-radius)",
              marginRight: "15px",
            }}
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Login
          </Button>}


          {!isAuthenticated && <Button
            variant="contained"
            fullWidth={false}
            size="large"
            style={{
              width: "120px",
              color: "var(--light-text-color)",
              backgroundColor: "var(--ateneo-blue-500)",
              border: "2px solid var(--ateneo-blue-500)",
              borderRadius: "var(--border-radius)",
            }}
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Register
          </Button>}
        </div>
      </div>
    </>
  );
};

export default ScreenFitWrapper;
