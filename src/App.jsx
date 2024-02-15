import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./pages/home/Footer";

function App() {
  return (
    <>
    <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
