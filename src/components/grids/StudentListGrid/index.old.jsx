import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import classes from "./index.module.css";

const columns = [
  {
    field: "id",
    headerName: "",
    minWidth: 100,
    align: "center",
  },
  {
    field: "image",
    headerName: "",
    width: 100,
    align: "center",
    header: () => (
        <strong style={{ gridColumn: 'span 3', textAlign: 'center' }}>Student</strong>
      ),
    renderCell: (params) => (
      <Grid container alignItems="center" justifyContent="center" sx={{height: '100%'}}>
        <Avatar alt="Student Image" src={params.row.image} />
      </Grid>
    ),
  },
  {
    field: "name",
    flex: 1,
    minWidth: 500,
    align: "left",
    renderHeader: () => (
      <Typography className={classes["column-heading"]}>
        Student List
      </Typography>
    ),
    renderCell: (params) => <div>{params.row.name}</div>,
  },
  {
    align: "center",
    field: "aptitudeScore",
    width: 200,
    flex: 0.125,
    renderHeader: () => (
      <Typography className={classes["column-heading"]}>
        Overall Aptitude Score
      </Typography>
    ),
  },
];

const rows = [
  { id: 1, image: "url_to_image", name: "Student 1", aptitudeScore: 80 },
  { id: 2, image: "url_to_image", name: "Student 2", aptitudeScore: 75 },
  { id: 3, image: "url_to_image", name: "Student 2", aptitudeScore: 75 },
  { id: 4, image: "url_to_image", name: "Student 2", aptitudeScore: 75 },
  { id: 5, image: "url_to_image", name: "Student 2", aptitudeScore: 75 },
  // Add more rows as needed
];

const handleRowClick = (event, rowData) => {
    console.log("handleRowClick", event, rowData);
}

const StudentListGrid = () => {
  return (
    <div style={{ height: 1000, width: "100%" }}>
      <DataGrid
        rowHeight={60}
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{ m: 2, mt:0, border: "none" }}
        disableColumnMenu 
        disableColumnFilter 
        hideFooterPagination={true} // Disable pagination
        hideFooterSelectedRowCount={true}
        // loading={true}
        columnHeaderTitle="My DataGrid Caption" // Set the caption
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default StudentListGrid;
