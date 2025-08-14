import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About"; // Import the new page
import Home from "./pages/Home"; // Assuming a Home page exists

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
