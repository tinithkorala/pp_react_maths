import { Box, Typography } from "@mui/material";
import Paper from "../../ui/Paper";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PieChart from "../../charts/PieChart";



const TopicCard = ({data}) => {
  return (
    <Paper styleList={data.classString}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <SchoolOutlinedIcon />
        <MoreVertIcon />
      </Box>
      <Typography margin="10px 0px">
        {data.cardTopic}
      </Typography>
      <PieChart
        dataSet={data.dataSet}
      />
    </Paper>
  );
};

export default TopicCard;
