import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Auth from "./pages/Auth/Auth";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
