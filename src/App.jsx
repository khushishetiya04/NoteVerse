import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ViewNote from "./pages/ViewNote";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/note/:id"
                    element={<ViewNote />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;