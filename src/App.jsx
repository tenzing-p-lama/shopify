import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>Header</div>
        <main>
          <SideBar />
          <div className="app__content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
