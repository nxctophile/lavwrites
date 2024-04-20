import './App.scss'
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.tsx";
import Login from "./routes/Login.tsx";
import Signup from "./routes/Signup.tsx";

function App() {

  return (
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
      </Routes>
  )
}

export default App
