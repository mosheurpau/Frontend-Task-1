import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import TopBanner from "./Pages/Shared/TopBanner/TopBanner";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <TopBanner></TopBanner>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
