import { Card, CardContent, Typography } from "@mui/material";
import Answer from "./Answer";

const Question = ({ question, questionNo, userAnswers, onAnswerClick, answerKey }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Question {questionNo}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {question.question_description}
        </Typography>
        {question[answerKey].map((answer) => (
          <Answer
            answer={answer.answer}
            key={answer.id}
            questionId={question.id}
            answerId={answer.id}
            userAnswers={userAnswers}
            onAnswerClick={onAnswerClick}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default Question;
