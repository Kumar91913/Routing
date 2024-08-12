import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  </div>
)

export default App