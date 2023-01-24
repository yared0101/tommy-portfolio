import "./App.css";
import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FindMe } from "./pages/FindMe";
import { Static } from "./pages/Static";
import { WireFrame } from "./pages/WireFrames";
import { Login } from "./pages/Login";
import { MotionGraphic } from "./pages/MotionGraphic";
import ThemeContext from "./context/ThemeContext";
function App() {
    const [theme, setTheme] = useState("light");
    /**
     *
     * @param {MediaQueryListEvent} event
     */
    const themeChangeHandler = (event) => {
        if (!localStorage.getItem("theme")) {
            const newColorScheme = event.matches ? "dark" : "light";
            setTheme(newColorScheme);
        }
    };
    useEffect(() => {
        const alreadySetTheme = localStorage.getItem("theme");
        if (alreadySetTheme) {
            setTheme(alreadySetTheme);
        } else {
            if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                setTheme("dark");
            } else {
                setTheme("light");
            }
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", themeChangeHandler);
            return window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", themeChangeHandler);
        }
    }, []);
    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className="App">
                    {/* <div className="side-black big-only"></div> */}
                    <div
                        className={`all-father ${
                            theme === "light" ? "theme-light" : "theme-dark"
                        }`}
                    >
                        {/* <div className="app-bar-top-decoration big-only">
                        <div className="bg-black"></div>
                        <div className="bg-white"></div>
                    </div> */}
                        {/* <div className="curve-handle-div bg-black big-only">
                        hey
                    </div> */}
                        <AppBar theme={theme} />
                        <div className="body-2">
                            <Routes>
                                <Route path="/" element={<Home />}></Route>
                                <Route
                                    path="/find-me"
                                    element={<FindMe />}
                                ></Route>
                                <Route
                                    path="/services"
                                    element={<Home />}
                                ></Route>
                                <Route
                                    path="/login"
                                    element={<Login />}
                                ></Route>
                                <Route
                                    path="/services/static"
                                    element={<Static />}
                                ></Route>
                                <Route
                                    path="/services/wireframes"
                                    element={<WireFrame />}
                                ></Route>
                                <Route
                                    path="/services/motion-graphics"
                                    element={<MotionGraphic />}
                                ></Route>
                                <Route path="/*" element={<Home />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </ThemeContext.Provider>
        </BrowserRouter>
    );
}

export default App;
