import React from "react";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import DataTable from "./DataTable";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  title: {
    textAlign: "left",
    borderBottom: "1px solid black",
    width: "100%",
  },
  input: {
    width: "90%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "19px",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    border: "none",
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(5),
  },
  add_button: {
    background: "#2589ff",
  },
}));

function ListPage() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} container>
          <Grid item xs={12} sm={7} container>
            <Typography component="h1" variant="h4" className={classes.title}>
              การอบรม
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            className={classes.input}
            id="search-academic"
            placeholder="Search"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/admin/academic/add">
            <Button variant="contained" className={classes.add_button}>
              <AddIcon style={{ color: "#FFF" }} />
            </Button>
          </NavLink>
        </Grid>
      </Grid>
      <DataTable />
    </div>
  );
}

export default ListPage;
