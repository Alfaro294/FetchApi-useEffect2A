import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "../src/pages/Home";
import Nav from "../src/components/Nav";
import DragonBanll from "../src/pages/DragonBall";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragon" element={<DragonBanll />} />
        </Routes>

      </Router>
    </>
  );
}


export default App;