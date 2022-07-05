import "./App.css";
import "@fontsource/zcool-kuaile";
import AppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="side-black big-only"></div>
                <div className="all-father">
                    <div className="app-bar-top-decoration big-only">
                        <div className="bg-black"></div>
                        <div className="bg-white"></div>
                    </div>
                    <div className="curve-handle-div bg-black big-only">
                        hey
                    </div>
                    <AppBar />
                    <div className="body-2">
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/find-me" element={<Home />}></Route>
                            <Route path="/services" element={<Home />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
