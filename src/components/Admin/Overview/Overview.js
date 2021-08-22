import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import "./Overview.css";

function Overview() {
  return (
    <Gird container spacing={2}>
      <Grid container>
        <H1>Overview</H1>
      </Grid>
      <Grid container></Grid>
    </Gird>
  );
}
export default Overview;
