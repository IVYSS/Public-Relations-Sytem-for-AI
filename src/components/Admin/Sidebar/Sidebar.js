import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import "./Sidebar.css";
import Overview from "../Overview/Overview";
import { Icon } from "@material-ui/core";

// Icon import
import Academic from "../Academic/Academic";

function Sidebar() {
  const links = [
    {
      name: "หน้าแรก",
      path: "/admin/overview",
    },
    {
      name: "อบรม",
      path: "/admin/academic",
    },
    {
      name: "หลักสูตร",
      path: "/admin/program",
    },
    {
      name: "ประชาสัมพันธ์",
      path: "/admin/media",
    },
    {
      name: "แอดมิน",
      path: "/admin/manage",
    },
  ];
  const test = (
    <Grid item xs={12}>
      <h1>test</h1>
    </Grid>
  );

  const renderLink = links.map((l, index) => {
    return (
      <Grid item xs={12} key={index} spacing={1}>
        <NavLink activeClassName="Sidebar-link-active" to={l.path} exact>
          {l.icon}
          <p>{l.name}</p>
        </NavLink>
      </Grid>
    );
  });

  return (
    <div className="body">
      <div className="nav_bar">
        <Grid container>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
      {/* ------------------------------------------------------------------ */}
      <div>
        <Grid container item xs={12}>
          <Grid container item xs={3}>
            <Grid item xs={12}>
              {/* main side bar size 3 */}
              <Grid container>
                <Grid container item xs={12}>
                  {renderLink}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={9} spacing={0}>
            <Switch>
              <Route path="/admin/overview" exact>
                <Overview />
              </Route>
              <Route path="/admin/academic">
                <Academic />
              </Route>
              <Route path="/admin/program">
                <p>program</p>
              </Route>
              <Route path="/admin/media">
                <p>media</p>
              </Route>
              <Route path="/admin/manage">
                <p>manage</p>
              </Route>
              <Route exact path="/admin">
                <Redirect to="/admin/overview" />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Sidebar;
