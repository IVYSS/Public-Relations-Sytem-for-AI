import "./Login.css";
function Login() {
  return (
    <div className="Login-root">
      <div className="Login-container">
        <img className="Login-logo" src="/ogimage.png" alt=""></img>
        <div className="Login-box Login-shadow">
          <form>
            <p>
              <label>
                <p className="Login-label ">Username</p>
                <input
                  className="Login-input Login-shadow"
                  type="text"
                  name="username"
                />
              </label>
            </p>
            <p>
              <label>
                <p className="Login-label">Password</p>
                <input
                  className="Login-input Login-shadow"
                  type="password"
                  name="password"
                />
              </label>
            </p>
            <p>
              <input type="submit" className="Login-btn" value="Login" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
