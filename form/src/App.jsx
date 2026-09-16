import {BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import UserDetails from "./Userdetails";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

function Navigation() {
  const navigate = useNavigate();

  function gotoAbout() {
    navigate("/about");
  }

  return (
    <>
      <button onClick={gotoAbout}>
        About
      </button>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;