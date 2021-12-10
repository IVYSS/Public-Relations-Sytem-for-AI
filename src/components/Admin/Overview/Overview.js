import { Grid } from "@material-ui/core";
import "./Overview.css";
function Overview() {
  return (
    <Grid xs={12} className="overview-body">
      {/* --------------- */}
      <Grid container xs={12} className="overview-graph">
        <Grid xs={8} className="graph">
          <p>Coloum1</p>
        </Grid>
        <Grid xs={4} className="item">
          <p>Coloum2</p>
        </Grid>
      </Grid>
      {/* --------------- */}

      <Grid container xs={12} className="overview-manage">
        <Grid>
          <h3>หน้าการจัดการ</h3>
        </Grid>
      </Grid>
      {/* --------------- */}

      <Grid container xs={12} className="overview-update">
        <Grid>
          <h3>การอัพเดต</h3>
        </Grid>
      </Grid>
      {/* --------------- */}
    </Grid>
  );
}
export default Overview;
