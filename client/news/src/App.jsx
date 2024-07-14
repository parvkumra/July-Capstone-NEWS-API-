import Display from "./components/Display"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import News from "./components/News"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sports from "./components/Sports"
import Politics from "./components/Politics"
import Technology from "./components/Technology"

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sports" element={<Sports/>}/>
      <Route path="/technology" element={<Technology/>}/>
      <Route path="/politics" element={<Politics/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
