import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import savat  from './assets/savat.svg'
import Register from "./pages/Register";
import Home from "./pages/Home";
import Airpods from "./pages/Airpods";
import Phones from "./pages/Phones";
import Speakers from "./pages/Speakers";
import About from "./pages/About";
import Shops from "./pages/Shops";
import Add from './pages/Add/index'

function App() {
  return (
    <>
    <div className="all-header">
    <header className="app-header">
        <NavLink to="/" exact className="Home">
          Home
        </NavLink>
        <nav>
          <NavLink className='Home' to="/phones" activeClassName="active">
            Headphones
          </NavLink>
          <NavLink className='Home' to="/speakers" activeClassName="active">
            Speakers
          </NavLink>
          <NavLink className='Home' to="/airpods" activeClassName="active">
            Airpods
          </NavLink>
          <NavLink className='about' to='/About'><img src={savat} alt="" /></NavLink>
        </nav>
      </header>
      <div className="botom"></div>
  
    </div>
   
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/airpods" element={<Airpods />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path ='/about' element = {<About></About>}></Route>
        <Route path="/shops" element = {<Shops></Shops>}></Route>
        <Route path="/add" element = {<Add></Add>}></Route>
      </Routes>
    </>
  );
}

export default App;
