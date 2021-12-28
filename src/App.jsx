import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import DashboardContainer from "./containers/DashboardContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<LoginForm />} />
        <Route path="/" exact element={<DashboardContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
