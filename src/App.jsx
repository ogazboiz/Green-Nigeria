import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" h-dvh">
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
            </Route>
            {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
