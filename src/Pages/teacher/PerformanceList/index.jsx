import { Box, Grid, Select, FormControl, MenuItem } from "@mui/material";
import Section from "../../../components/ui/Section";
import Button from "./../../../components/ui/Button";
import Paper from "../../../components/ui/Paper";
import GetAppIcon from '@mui/icons-material/GetApp';
import { useState } from "react";
import StudentListGrid from "../../../components/grids/StudentListGrid";
import HeaderBar from "./../../../components/layouts/HeaderBar";

const sortingOptionList = ["Highest Marks", "Lowest Marks"];

const PerformaceList = () => {
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

      <HeaderBar pageTitle="Performance List" />

      <Section title="Overview">
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <Select
              labelId="sort-option-label"
              id="sort-option"
              value={sortOption}
              onChange={handleChangeSortOption}
              renderValue={(sortOption) => `Sort : ${sortOption}`}
            >
              {sortingOptionList?.map((item, index) => (
                <MenuItem key={index} value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={9}>
          <Button
            type="button"
            variant="text"
            onClick={handleDownload}
            size="small"
            style={{
              color: 'var(--text-button-color)',
              float: 'right'
            }}
            startIcon={<GetAppIcon sx={{height: '30px', width: '30px'}} />}
          >
            Download
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <StudentListGrid />
          </Paper>
        </Grid>
      </Section>
    </Box>
  );
};

export default PerformaceList;
