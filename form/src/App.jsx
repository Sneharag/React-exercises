import {BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import UserDetails from "./Userdetails";
import { useEffect, useState } from "react";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

function Navigation() {
  // const navigate = useNavigate();
  const [users,setUsers] = useState([]);
  // const [username, setUsername] = useState("Roni");
  // const [email, setEmail] = useState("roni@gmail.com");

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
  },[]);

  // function gotoAbout() {
  //   navigate("/about");
  // }

  return (
    
    <>
    {users.map((user) => (
      <User 
      key={user.id}
      user={user}
      />
    )) }
    
      {/* <button onClick={gotoAbout}>
        About
      </button> */}

       {/* <button onClick={() => setUsername("Deri")}>
        Change username
      </button> */}

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