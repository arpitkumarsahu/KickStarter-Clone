import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Top from "./Components/Top";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./Pages/Signup";
import SinglePage from "./Pages/SinglePage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/projects" element={<SinglePage />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
