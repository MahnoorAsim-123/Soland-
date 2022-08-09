import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/screen/home";
import Spanish from "./components/screen/spanish";
import PreOrder from "./components/screen/Pre-order";
import Team from "./components/screen/Team";
import Aboutus from "./components/screen/Aboutus";
import Login from "./components/screen/Login";
import Signup from "./components/screen/Signup";
import AddCart from "./components/screen/AddCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spanish" element={<Spanish />} />
          <Route path="/preorder" element={<PreOrder />} />
          <Route path="/team" element={<Team />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addcart" element={<AddCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
