import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About"; // Import the new page
import FixturesPage from "./pages/HistoricFixtures"; // Assuming a Home page exists
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fixtures" element={<FixturesPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
