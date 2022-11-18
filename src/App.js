import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default App;
