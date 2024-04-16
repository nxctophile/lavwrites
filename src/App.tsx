import './App.scss'
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.tsx";
import Next from "./routes/Next.tsx";

function App() {

  return (
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/next" element={<Next />} />
      </Routes>
  )
}

export default App
