import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import Topics from "./components/pages/Topics";
import Thread from "./components/pages/Thread";
import SingleTopic from "./components/pages/SingleTopic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories" element={<Topics />}></Route>
        <Route path="/category" element={<SingleTopic />}></Route>
        <Route path="/thread" element={<Thread />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
