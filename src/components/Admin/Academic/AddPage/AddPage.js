import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField } from "@material-ui/core";
import EditableTable from "./EditableTable";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "left",
    width: "100%",
    textDecoration: "underline",
  },
  container: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: theme.spacing(5),
  },
  input: {
    border: "1px solid #DDD",
    borderRadius: 5,
    paddingLeft: "10px",
    width: "100%",
  },
}));

function AddPage() {
  const classes = useStyles();
  // const [course, setCourse] = useState({});
  const [contents, setContents] = useState([]);

  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} container>
          <Typography component="h1" variant="h4" className={classes.title}>
            เพิ่มหัวข้อการอบรม
          </Typography>
        </Grid>
        <Grid item xs={12} container>
          <Typography component="h1" variant="h6">
            ชื่อหัวข้อการอบรม
          </Typography>
          <TextField
            className={classes.input}
            placeholder="ชื่อหัวข้อการอบรม"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={12} container>
          <Typography component="h1" variant="h6">
            หลักการ
          </Typography>
          <TextField
            className={classes.input}
            placeholder="หลักการ"
            multiline
            minRows={4}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={12} container>
          <Typography component="h1" variant="h6">
            เนื้อหา
          </Typography>
          <EditableTable contents={contents} setContents={setContents} />
        </Grid>
        <Grid item xs={12} container>
          <Typography component="h1" variant="h6">
            วิทยากร
          </Typography>
          <TextField
            className={classes.input}
            placeholder="วิทยากร"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={12} container>
          quality
        </Grid>
        <Grid item xs={12} container>
          <Typography component="h1" variant="h6">
            ระยะเวลาและสถานที่อบรม
          </Typography>
          <TextField
            className={classes.input}
            placeholder="ระยะเวลาและสถานที่อบรม"
            multiline
            minRows={4}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default AddPage;
