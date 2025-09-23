import "./index.css";
import GiftStore from "./pages/GiftStore";
import Navbar from "./components/homePageComponents/Navbar";
import Footer from "./components/homePageComponents/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUpCom from "./components/signup/SignUpCom";
import Shop from "./pages/Shop";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/giftstore" element={<GiftStore />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUpCom />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
