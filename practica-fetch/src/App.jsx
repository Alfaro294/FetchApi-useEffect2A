import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "../src/pages/Home";
import Nav from "../src/components/Nav";
import DragonBanll from "../src/pages/DragonBall";
import RickAndMorty from "../src/pages/RickAndMorty";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragon" element={<DragonBanll />} />
          <Route path= "/rickAndMorty" element = {<RickAndMorty />} />
        </Routes>

      </Router>
    </>
  );
}


export default App;