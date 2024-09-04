import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import classes from "./index.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";

const columns = [
  {
    id: 1,
    headerName: "Topic List",
    textAlign: "left",
    colspan: 2,
  },
  {
    id: 2,
    headerName: "Overall Quiz Average",
    textAlign: "center",
    colspan: 1,
  },
];
const rows = [
  { id: 1, topic: "Mathematical Operations in Real Numbers", average: 91 },
  { id: 2, topic: "Relationship Between Numbers", average: 82 },
  { id: 3, topic: "Units and Fractions", average: 80 },
  { id: 4, topic: "Using Ratios", average: 79 },
  { id: 5, topic: "Percentages for Transactions", average: 76 },
  { id: 6, topic: "Finding the Perimeter", average: 75 },
  { id: 7, topic: "Geometric Relationships", average: 69 },
  { id: 8, topic: "Data Representations", average: 65 },
  { id: 9, topic: "Probability", average: 64 },
  { id: 10, topic: "Sets and their Applications", average: 62 },
];

const TopicListGrid = () => {
  const navigate = useNavigate();

  const handleRowClick = (row) => {
    console.log("handleRowClick", row);
    // navigate("/teacher/performance-list/1");
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
                <TableCell align="left">{row.topic}</TableCell>
                <TableCell align="center" sx={{ width: "300px" }}>
                  {row.average}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Link className={classes["data-table-footer-link"]} to="">
        View more topics
        <ArrowForwardIosIcon />
      </Link>
    </>
  );
};

export default TopicListGrid;
