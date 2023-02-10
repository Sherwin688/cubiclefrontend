import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Seats from "./components/seats/Seats";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Seats/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
