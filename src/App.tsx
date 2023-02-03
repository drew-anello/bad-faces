import "../src/App.css"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from './pages/Home'
import Nav from "./components/nav"
import Footer from "./components/footer"
import { Route, Routes } from 'react-router-dom'



function App () {
return(
  <div>
  <Nav />
    <Routes>  
    <Route  path="/" element={<Home />} />
    <Route  path="/about" element={<About />} />
    <Route  path="/contact" element={<Contact />} />
</Routes>
<Footer />

</div>
  
)
}
export default App