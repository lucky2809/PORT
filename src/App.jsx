import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'
import Home from './components/pages/Home'
import Skill from './components/pages/Skill'

function App() {

  return (
    <>
    <Navbar></Navbar> 
    <Home></Home> 
    <Skill></Skill> 
    <Contact /> 
    <Footer></Footer>
    </>
  )
}

export default App
