import { Box, FormControl, Grid, MenuItem, Select } from "@mui/material";
import Section from "../../../components/ui/Section";
import { useState } from "react";
import HeaderBar from "./../../../components/layouts/HeaderBar";
import ProgressBarList from "../../../components/ui/ProgressBarList";
import Button from "./../../../components/ui/Button";
import Paper from "../../../components/ui/Paper";
import GetAppIcon from "@mui/icons-material/GetApp";
import TopicListGrid from "../../../components/grids/TopicListGrid";

const strongestTopicsList = [
  {
    id: 1,
    text: "Relationships Between Numbers",
    value: 95,
    color: "success",
  },
  {
    id: 2,
    text: "Units and Fractions",
    value: 92,
    color: "success",
  },
  {
    id: 3,
    text: "Data Representation",
    value: 89,
    color: "success",
  },
];

const weakestTopicsList = [
  {
    id: 1,
    text: "Probability",
    value: 36,
    color: "warning",
  },
  {
    id: 2,
    text: "Sets and their Applications",
    value: 52,
    color: "warning",
  },
  {
    id: 3,
    text: "Algebraic Expressions",
    value: 52,
    color: "warning",
  },
];

const sortingOptionList = ["Highest Marks", "Lowest Marks"];

const TopicPerformace = () => {
  const [sortOption, setSortOption] = useState(sortingOptionList[0]);

  const handleChangeSortOption = (event) => {
    console.log("handleChangeSortOption");
    setSortOption(event.target.value);
  };

  const handleDownload = () => {
    console.log("handleDownload");
  };

  return (
    <Box>
      <HeaderBar pageTitle="Topic Performace" />

      <Section title="Topic Performance">
        <Grid item xs={12} md={6}>
          <ProgressBarList
            list={strongestTopicsList}
            title="Strongest topics"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ProgressBarList list={weakestTopicsList} title="Weakest topics" />
        </Grid>
      </Section>

      <Box>
        <Grid container>
          <Grid item xs={12} md={3} sx={{mt:6}}>
            <FormControl fullWidth>
              <Select
                labelId="sort-option-label"
                id="sort-option"
                value={sortOption}
                onChange={handleChangeSortOption}
                renderValue={(sortOption) => `Sort : ${sortOption}`}
              >
                {sortingOptionList?.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={9} sx={{mt:6}}>
            <Button
              type="button"
              variant="text"
              onClick={handleDownload}
              size="small"
              style={{
                color: "var(--text-button-color)",
                float: "right",
              }}
              startIcon={<GetAppIcon sx={{ height: "30px", width: "30px" }} />}
            >
              Download
            </Button>
          </Grid>
          <Grid item xs={12} sx={{mt:6}}>
            <Paper>
              <TopicListGrid />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TopicPerformace;
