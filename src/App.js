import "./App.css";

import Login from "./components/Login";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div>
      <div>
        <h3>Home</h3>
        <h3>Login</h3>
        <h3>Dashboard</h3>
      </div>
      <Login />
      <DashBoard />
      {/*   <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/dash"
          element={<DashBoard />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes> */}
    </div>
  );
}

export default App;
