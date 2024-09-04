import { Stack } from "@mui/material";
import ChartHeading from "../../text/ChartHeading";

const ChartContainer = ({ title, children }) => {
  return (
    <Stack direction="column" justifyContent="center">
      <ChartHeading>{title}</ChartHeading>
      {children}
    </Stack>
  );
};

export default ChartContainer;
