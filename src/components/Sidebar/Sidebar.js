import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import './Sidebar.css';

const useStyles = makeStyles((sidebar) => ({
  nav: {
    backgroundColor: "#2589FF",
    margin: 0,
    padding: 0,
    height: 71,
  },
  container_siderbar: {
    height: "100vh",
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
    height: "30vh",
    backgroundColor: "#2589FF",
    alignItems: "center",
  },

  bodyListMenu: {
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: sidebar.spacing(4),
  },
  tiemSizeBar: {
    margin: sidebar.spacing(4),
    padding: sidebar.spacing(1),
    height: "5%",
    textAlign: 'center',
  },
  textName: {
    textAlign: "center",
    margin: "auto",
    backgroundColor: "red",
  },
  topic:  {
    backgroundColor: "#2589FF",
    justifyContent: "center",
    alignItems: "center",
    margin: sidebar.spacing(4),
    textAlign: 'center',
  },
}));


function Sidebar() {
  const styles = useStyles();
  return (
    <div className="body">
      <div className="nav_bar">
        <Grid container className={styles.nav}>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
      <div className="Side_bar">
        <Grid container>
          {/* ------------------------------------------------------------------ */}

          <Grid item xs={3} className={styles.container_siderbar}>
            {/* main side bar size 3 */}
            <Grid className={styles.pic_bg}>
              <img src="/1@2x.png" alt="#"/>
            </Grid>
            <Grid className={styles.bodyListMenu}>
                  <div className="Sidebar-listMenu">
                    <h3>การอบรม</h3>
                  </div>
                  <div className="Sidebar-block">
                    <h3 className="Sidebar-text">การอบรม</h3>
                  </div>
                  <div className="Sidebar-block">
                    <h3 className="Sidebar-text">การอบรม</h3>
                  </div>
                  <div className="Sidebar-block">
                    <h3 className="Sidebar-text">การอบรม</h3>
                  </div>
                  <div className="Sidebar-block">
                    <h3 className="Sidebar-text">การอบรม</h3>
                  </div>
                  <div className="Sidebar-block">
                    <h3 className="Sidebar-text">การอบรม</h3>
                  </div>
                  
            </Grid>
          </Grid>

          {/* ------------------------------------------------------------------- */}
          <div className="bodyOverview">
            <Grid item xs={9} className={styles.body} spacing={0}></Grid>
          </div>
        </Grid>
      </div>
    </div>
  );
}
export default Sidebar;
