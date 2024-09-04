import { Card, Typography } from "@mui/material";

const Answer = ({ answer, questionId, answerId, userAnswers, onAnswerClick }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        mt: 2,
        mb: 2,
        borderColor: "#0281D8",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: userAnswers[questionId] === answerId ? '#0281D8' : 'white',
      }}
      onClick={() => onAnswerClick(questionId, answerId)}
    >
      <Typography variant="caption" display="block" sx={{ ml: 2 }} gutterBottom>
        {answer}
      </Typography>
    </Card>
  );
};

export default Answer;
