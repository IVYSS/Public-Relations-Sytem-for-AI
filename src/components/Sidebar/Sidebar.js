import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import "./Sidebar.css";
import Overview from '../Overview/Overview';
import { Icon } from '@material-ui/core';

// Icon import
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SchoolIcon from '@material-ui/icons/School';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const useStyles = makeStyles((sidebar) => ({
  nav: {
    backgroundColor: "#2589FF",
    margin: 0,
    padding: 0,
    height: "7vh",
  },
  container_siderbar: {
    height: "93vh",
    backgroundColor: "#F1F7F8",
    border: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  side_bar: {
    backgroundColor: "red",
    borderRadius: 0,
  },
  pic_bg: {
    height: "30%",
    backgroundColor: "#2589FF",
    alignItems: "center",
  },

  bodyListMenu: {
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
  list_menu: {
    height: "7%",
    margin: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    direction: "row",
  },
  side_bar_icon:{
    fontSize: '2rem',
    height : '100%', 
    paddingLeft: '5%',
  },
}));

function Sidebar() {
  const styles = useStyles();
  const links = [
    { name: "หน้าแรก", path: "/admin/overview", icon: <HomeIcon className={styles.side_bar_icon}/>},
    { name: "อบรม", path: "/admin/academic", icon: <MenuBookIcon className={styles.side_bar_icon}/>},
    { name: "หลักสูตร", path: "/admin/program", icon: <SchoolIcon className={styles.side_bar_icon}/>},
    { name: "ประชาสัมพันธ์", path: "/admin/media", icon: <NotificationsIcon className={styles.side_bar_icon}/>},
    { name: "แอดมิน", path: "/admin/manage", icon: <SupervisorAccountIcon className={styles.side_bar_icon}/>},
  ];
  const test = (
    <Grid item xs={12} className={styles.list_menu}>
      <h1>test</h1>
    </Grid>
  );

  const renderLink = links.map((l, index) => {
    return (
      <Grid item xs={12} key={index} className={styles.list_menu} spacing={1}>
        <NavLink
          className="Sidebar-link"
          activeClassName="Sidebar-link-active"
          to={l.path}
          exact
        >
          {l.icon}
          <p>{l.name}</p>
        </NavLink>
      </Grid>
    );
  });

  return (
    <div className="body">
      <div className="nav_bar">
        <Grid container className={styles.nav}>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
      {/* ------------------------------------------------------------------ */}
      <div className="Side_bar">
        <Grid container item xs={12}>
          <Grid container item xs={3}>
            <Grid item xs={12} className={styles.container_siderbar}>
              {/* main side bar size 3 */}
              <Grid className={styles.pic_bg}>
                <img src="/1@2x.png" alt="#" />
                {test}
              </Grid>
              <Grid container className={styles.bodyListMenu}>
                {renderLink}
              </Grid>
            </Grid>
          </Grid>
          {/* ------------------------------------------------------------------- */}
          <div className="bodyOverview">
            <Grid item xs={9} className={styles.body} spacing={0}>
              <Switch>
                <Route path="/admin/overview" exact>
                  <p>overview</p>
                </Route>
                <Route path="/admin/academic">
                  <p>academic</p>
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
          </div>
        </Grid>
      </div>
    </div>
  );
}
export default Sidebar;
