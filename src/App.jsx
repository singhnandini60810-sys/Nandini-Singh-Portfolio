import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./components/landing/Landing";
import Professional from "./components/professional/Professional";
import Personal from "./components/personal/Personal";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/professional"
          element={<Professional />}
        />

        <Route
          path="/personal"
          element={<Personal />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;