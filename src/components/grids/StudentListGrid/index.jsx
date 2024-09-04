import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import classes from "./index.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate } from "react-router-dom";

const columns = [
  {
    id: 1,
    headerName: "Student List",
    textAlign: "left",
    colspan: 3,
  },
  {
    id: 2,
    headerName: "Overall Aptitude Score",
    textAlign: "center",
    colspan: 3,
  },
];
const rows = [
  { id: 1, image: "url_to_image", name: "Student 1", aptitudeScore: 80 },
  { id: 2, image: "url_to_image", name: "Student 2", aptitudeScore: 75 },
  { id: 3, image: "url_to_image", name: "Student 3", aptitudeScore: 25 },
  { id: 4, image: "url_to_image", name: "Student 4", aptitudeScore: 55 },
  { id: 5, image: "url_to_image", name: "Student 5", aptitudeScore: 85 },
];

const StudentListGrid = () => {

  const navigate = useNavigate();

  const handleRowClick = (row) => {
    console.log("handleRowClick", row);
    navigate('/teacher/performance-list/'+row?.id);
  };

  return (
    <>
      <TableContainer>
        <Table className={classes["data-table"]}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column?.id}
                  colSpan={column?.colspan}
                  className={`${classes["text-" + column?.textAlign]} ${
                    classes["column-heading"]
                  }`}
                >
                  {column?.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} onClick={() => handleRowClick(row)}>
                <TableCell align="center" sx={{ width: "100px" }}>
                  {row.id}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes["text-center"]}
                  sx={{ width: "100px" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={row.image}
                    sx={{ width: 56, height: 56, m: "auto" }}
                  />
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center" sx={{ width: "300px" }}>
                  {row.aptitudeScore}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Link className={classes['data-table-footer-link']} to="">
        View full leader board
        <ArrowForwardIosIcon />
      </Link>

    </>
  );
};

export default StudentListGrid;
