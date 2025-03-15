import "./App.css";
import { Home, Header, Layout, Events, Music } from "./router";
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
                <Events />
              </Layout>
            }
          ></Route>
          <Route
            path="/events"
            element={
              <Layout>
                <Events />
              </Layout>
            }
          ></Route>
          <Route
            path="/music"
            element={
              <Layout>
                <Music />
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
