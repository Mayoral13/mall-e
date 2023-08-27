import './App.css'
import Home from './pages/home'
import Products from './pages/products'
import Cart from './pages/cart'
import Login from './pages/login'
import SignUp from './pages/signup'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/products" element = {<Products/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/signup" element = {<SignUp/>}/>
      </Routes>
    </Router>

  )
}

export default App
