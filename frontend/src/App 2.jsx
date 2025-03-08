import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Success from "./pages/Success";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </Router>
}

export default App