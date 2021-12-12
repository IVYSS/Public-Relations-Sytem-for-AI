import {
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { Prompt } from "react-router-dom/cjs/react-router-dom.min";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Overview.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
    borderRadius: 5,
  },
  overViewBody: {
    backgroundColor: "#fff",
  },
  overViewCard: {
    boxShadow: "3px 3px 30px rgb(199, 199, 199)",
    borderRadius: "11px",
    marginBottom: "3%",
    marginRight: "2%",
    marginLeft: "2%",
    padding: "3%",
  },
  herderManage: {
    margin: "2%",
    marginTop: "1%",
    color: "#2D569e",
    textDecoration: "underline",
    font: "bold",
    fontSize: 34,
    fontFamily: "Prompt",
  },
  cardOverView: {
    fontFamily: "Prompt",
    color: "#2D569e",
  },
  circularProgress: {
    size: "50",
    color: "#2D569e",
    thickness: "8",
  },
});
const cardName = ["การอบรม", "หลักสูตตร", "ประชาสัมพันธ์", "ภาพรวม"];
const adminData = [
  { id: "name", label: "ชื่อ", minWidth: 170 },
  {
    id: "status",
    label: "สถานะ",
    minWidth: 170,
    align: "center",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "วัน /เดือน /ปี",
    minWidth: 170,
    align: "center",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "time",
    label: "เวลา",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

const lastUpdate = [
  {
    id: "updateList",
    label: "รายการที่อัพเดต",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "admin",
    label: "ผู้อัพเดต",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "วัน /เดือน /ปี",
    minWidth: 170,
    align: "center",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "time",
    label: "เวลา",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];
function lastCreateDate(updateList, admin, date, time) {
  return { updateList, admin, date, time };
}

function adminCreateData(name, status, date, time) {
  return { name, status, date, time };
}
const onlineImg = (porp) => {};

const adminListData = [
  adminCreateData("นายธนวัฒนื ปีตวิบลเถสียร", "online", "10/12/2564", "18:16"),
  adminCreateData("China", "online", "10/12/2564", 9596961),
  adminCreateData("Italy", "online", "10/12/2564", 301340),
  adminCreateData("United States", "online", "10/12/2564", 9833520),
  adminCreateData("Canada", "online", "10/12/2564", 9984670),
  adminCreateData("Australia", "online", "10/12/2564", 7692024),
  adminCreateData("Germany", "online", "10/12/2564", 357578),
  adminCreateData("Ireland", "online", "10/12/2564", 70273),
  adminCreateData("Mexico", "online", "10/12/2564", 1972550),
  adminCreateData("Japan", "JP", "10/12/2564", 377973),
  adminCreateData("France", "FR", "10/12/2564", 640679),
  adminCreateData("United Kingdom", "GB", "10/12/2564", 242495),
  adminCreateData("Russia", "RU", "10/12/2564", 17098246),
  adminCreateData("Nigeria", "NG", "10/12/2564", 923768),
  adminCreateData("Brazil", "BR", "10/12/2564", 8515767),
];

const rowsListUpdate = [
  lastCreateDate("India", "online", "10/12/2564", 3287263),
  lastCreateDate("China", "online", "10/12/2564", 9596961),
  lastCreateDate("Italy", "online", "10/12/2564", 301340),
  lastCreateDate("United States", "online", "10/12/2564", 9833520),
  lastCreateDate("Canada", "online", "10/12/2564", 9984670),
  lastCreateDate("Australia", "online", "10/12/2564", 7692024),
  lastCreateDate("Germany", "online", "10/12/2564", 357578),
  lastCreateDate("Ireland", "online", "10/12/2564", 70273),
  lastCreateDate("Mexico", "online", "10/12/2564", 1972550),
  lastCreateDate("Japan", "JP", "10/12/2564", 377973),
  lastCreateDate("France", "FR", "10/12/2564", 640679),
  lastCreateDate("United Kingdom", "GB", "10/12/2564", 242495),
  lastCreateDate("Russia", "RU", "10/12/2564", 17098246),
  lastCreateDate("Nigeria", "NG", "10/12/2564", 923768),
  lastCreateDate("Brazil", "BR", "10/12/2564", 8515767),
];

const Overview = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [progress, setProgress] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Grid container xs={12} className={classes.overViewBody} m={4}>
      {/* --------------- */}
      <Grid container xs={12} className={classes.overViewCard}></Grid>
      <Grid
        container
        xs={12}
        m={4}
        p={3}
        spacing={3}
        className={classes.overViewCard}
      >
        {cardName.map((cardName) => (
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="h5"
                  alignCenter
                  className={classes.cardOverView}
                >
                  {cardName}
                </Typography>
                <CircularProgress
                  className={classes.circularProgress}
                  variant="determinate"
                  value={progress}
                  color="primary"
                  m={3}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* --------------- */}

      <Grid container xs={12} className={classes.overViewCard} p={3}>
        <Typography variant="h3" className={classes.herderManage}>
          หน้าการจัดการ
        </Typography>
        <Grid container p={2}>
          <Paper className={classes.root} m={3}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {adminData.map((adminData) => (
                      <TableCell
                        key={adminData.id}
                        align={adminData.align}
                        style={{
                          minWidth: adminData.minWidth,
                          fontSize: 24,
                          color: "#FFF",
                          fontFamily: "Prompt",
                          backgroundColor: "#2D569E",
                        }}
                      >
                        {adminData.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {adminListData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((adminListData) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={adminListData.code}
                        >
                          {adminData.map((adminData) => {
                            const value = adminListData[adminData.id];
                            return (
                              <TableCell
                                key={adminData.id}
                                align={adminData.align}
                                style={{ fontFamily: "Prompt", fontSize: 16 }}
                              >
                                {adminData.format && typeof value === "number"
                                  ? adminData.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={adminListData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
      {/* --------------- */}
      <Grid container xs={12} className={classes.overViewCard} p={3}>
        <Typography variant="h3" className={classes.herderManage}>
          อัพเดตล่าสุด
        </Typography>
        <Grid container p={2}>
          <Paper className={classes.root} m={3}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {lastUpdate.map((lastUpdate) => (
                      <TableCell
                        key={lastUpdate.id}
                        align={lastUpdate.align}
                        style={{
                          minWidth: lastUpdate.minWidth,
                          fontSize: 24,
                          color: "#FFF",
                          fontFamily: "Prompt",
                          backgroundColor: "#2D569E",
                        }}
                      >
                        {lastUpdate.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsListUpdate
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((rowsListUpdate) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={rowsListUpdate.code}
                        >
                          {lastUpdate.map((lastUpdate) => {
                            const value = rowsListUpdate[lastUpdate.id];
                            return (
                              <TableCell
                                key={lastUpdate.id}
                                align={lastUpdate.align}
                                style={{ fontFamily: "Prompt", fontSize: 16 }}
                              >
                                {lastUpdate.format && typeof value === "number"
                                  ? lastUpdate.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rowsListUpdate.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* --------------- */}
    </Grid>
  );
};
export default Overview;
