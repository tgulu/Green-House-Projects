import "./App.css";
import { Home, Header, Layout } from "./router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
        </Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Router>
    </>
  );
}

export default App;
