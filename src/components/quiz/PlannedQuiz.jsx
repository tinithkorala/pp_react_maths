import { useEffect, useState } from "react";
import apiHelper from "../../features/apiHelper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser, studentState } from "../../features/slices/authSlice";
import MyButton from "../ui/Button";
import { Box } from "@mui/material";
import Question from "./Question";

const PlannedQuiz = ({
  itemPerPage,
  fetchUrl,
  submitUrl,
  answerKey,
  navigateTo,
}) => {
  const ITEM_PER_PAGE = itemPerPage;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const [quizList, setQuizList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const quizListCount = quizList.length;
  const userAnswersCount = Object.keys(userAnswers).length;

  const startIndex = currentPage * ITEM_PER_PAGE;

  const currentQuestions = quizList.slice(
    startIndex,
    startIndex + ITEM_PER_PAGE
  );

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(quizList.length / ITEM_PER_PAGE) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleAnswerClick = (questionId, answer) => {
    setUserAnswers((prevState) => ({
      ...prevState,
      [questionId]: answer,
    }));
  };

  const handleSubmitClick = async () => {
    const requestOptions = {
      url: submitUrl,
      data: {
        answers: userAnswers,
      },
    };
    const response = await apiHelper("post", requestOptions);
    if (response?.error) {
      // TODO :: Show error message
      console.log(response.error);
    }

    if (response?.data) {
      dispatch(studentState(response.data));
      navigate(navigateTo);
    }
  };

  useEffect(() => {
    if (user.userDetials.placement_status) {
      navigate("/learning-type-quiz");
    }
    const getPlacementQuiz = async () => {
      try {
        const requestOptions = {
          url: fetchUrl,
        };
        const response = await apiHelper("get", requestOptions);
        setQuizList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPlacementQuiz();
  }, [user.userDetials.placement_status, navigate, fetchUrl, navigateTo]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
        },
      }}
    >
      {currentQuestions?.map((question, index) => (
        <Question
          question={question}
          questionNo={startIndex + index + 1}
          key={question.id}
          userAnswers={userAnswers}
          onAnswerClick={handleAnswerClick}
          answerKey={answerKey}
        />
      ))}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <MyButton
          onClick={handleBack}
          variant="contained"
          fullWidth={false}
          size="medium"
          style={{ minWidth: "100px" }}
          disabled={currentPage === 0}
        >
          Back
        </MyButton>
        <MyButton
          onClick={handleSubmitClick}
          variant="contained"
          fullWidth={false}
          size="medium"
          style={{ minWidth: "100px" }}
          disabled={quizListCount != userAnswersCount}
        >
          Submit
        </MyButton>
        <MyButton
          onClick={handleNext}
          variant="contained"
          fullWidth={false}
          size="medium"
          style={{ minWidth: "100px" }}
          disabled={
            currentPage >= Math.ceil(quizList.length / ITEM_PER_PAGE) - 1
          }
        >
          Next
        </MyButton>
      </Box>
    </Box>
  );
};

PlannedQuiz.defaultProps = {
  itemPerPage: 2,
  fetchUrl: "/quiz/learning-types",
  submitUrl: "/quiz/learning-types",
  answerKey: "learningTypeAnswers",
  navigateTo: "/student",
};

export default PlannedQuiz;
