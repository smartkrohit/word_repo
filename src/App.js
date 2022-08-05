import Home from "./component/Home";
import { Nav } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Word from "./component/Word";

function App() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home" >
        <Nav.Item>
          <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            <Link to="/word">Word</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/word" element={<Word />} />
      </Routes>
    </>
  );
}

export default App;
