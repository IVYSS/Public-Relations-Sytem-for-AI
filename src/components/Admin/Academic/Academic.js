import React from "react";
import { Route, Switch } from "react-router-dom";
import ListPage from "./ListPage";
import AddPage from "./AddPage/AddPage";

function Academic() {
  return (
    <Switch>
      <Route path="/admin/academic" exact>
        <ListPage />
      </Route>
      <Route path="/admin/academic/add">
        <AddPage />
      </Route>
    </Switch>
  );
}

export default Academic;
