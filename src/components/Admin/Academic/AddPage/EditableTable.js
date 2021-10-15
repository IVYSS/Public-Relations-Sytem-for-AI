import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function EditableTable(props) {
  const classes = useStyles();
  const { contents, setContents } = props;

  function addRow() {
    setContents([...contents, {}]);
  }

  function setContent(event) {
    contents[event.target.getAttribute("id")].content = event.target.value;
    console.log(contents);
  }

  function setOutcome(event) {
    contents[event.target.getAttribute("id")].outcome = event.target.value;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>หัวข้อที่</TableCell>
            <TableCell align="left">เนื้อหา</TableCell>
            <TableCell align="left">
              Learning Outcome
              <Button
                onClick={() => {
                  addRow();
                  console.log(contents);
                }}
              >
                Click me
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contents.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">
                <TextField
                  className={classes.input}
                  placeholder="เนื้อหา"
                  value={row.content}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  id={index}
                  onChange={setContent}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  className={classes.input}
                  placeholder="outcome"
                  value={row.outcome}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  id={index}
                  onChange={setOutcome}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EditableTable;
