import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    margin: "auto",
  },
  table: {
    width: "100%",
  },
  btn: {
    background: "#2589ff",
    color: "#fff",
    marginRight: theme.spacing(1),
    height: "90%",
  },
  row: {
    height: 20,
    border: "none",
  },
  cell: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const datas = [
  {
    name: "อมรม1",
  },
  {
    name: "อมรม2",
  },
  {
    name: "อมรม3",
  },
  {
    name: "อมรม4",
  },
];

function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="Data Table">
        <TableBody>
          {datas.map((data, index) => (
            <TableRow key={index} className={classes.row}>
              <TableCell component="th" scope="row" className={classes.cell}>
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row" className={classes.cell}>
                {data.name}
              </TableCell>
              <TableCell align="right" className={classes.cell}>
                <Button variant="contained" className={classes.btn}>
                  แก้ไข
                </Button>
                <Button variant="outlined" color="secondary">
                  ลบ
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
