import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import TopBanner from "./Pages/Shared/TopBanner/TopBanner";
import Header from "./Pages/Shared/Header/Header";
import Skim from "./Pages/Home/Versatile/Skim";
import Native from "./Pages/Home/Versatile/Native";
import BannerAd from "./Pages/Home/Versatile/BannerAd";
import PopUnder from "./Pages/Home/Versatile/PopUnder";
import Versatile from "./Pages/Home/Versatile/Versatile";

function App() {
  return (
    <div className="App">
      <TopBanner></TopBanner>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="versatile" element={<Versatile></Versatile>}>
          <Route path="popUnder" element={<PopUnder></PopUnder>} />
          <Route path="skim" element={<Skim></Skim>} />
          <Route path="native" element={<Native></Native>} />
          <Route path="bannerAd" element={<BannerAd></BannerAd>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
