import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuPrincipal } from "../pages/MenuPrincipal";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
      </Routes>
    </Router>
  );
}
