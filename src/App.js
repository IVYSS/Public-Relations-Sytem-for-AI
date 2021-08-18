import "./App.css";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SideBar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/admin/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Redirect to="/admin/login"></Redirect>
          </Route>
          <Route path="/admin/overview">
            <SideBar/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
