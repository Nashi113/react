import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages";
import Books from "./pages/Books";
import PagesTeam from "./pages/Team";
import PagesContact from "./pages/Contact";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="team" element={<PagesTeam />}></Route>
            <Route path="contact" element={<PagesContact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
