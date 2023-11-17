import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import "./App.scss";

import Header from "./components/Header/Header";
import Builder from "./pages/Builder/Builder";
import OnlineStore from "./pages/OnlineStore/OnlineStore";
import AppIntegration from "./pages/AppIntegration/AppIntegration";
import EditStore from "./pages/EditStore/EditStore";
import Partners from "./pages/Partners/Partners";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <SideBar />
          <div className="app__content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/online-store" element={<Builder />} />
              <Route path="/online-store/design" element={<OnlineStore />} />
              <Route
                path="/online-store/appintegration"
                element={<AppIntegration />}
              />
              <Route path="/online-store/partners" element={<Partners />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
