import './App.css'
import Header from './Header'
import Home from './Home'
import Bookslist from './Bookslist.json'
import Books from './Books'
import Cart from './Cart'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Footer'
import Bookinfo from './Bookinfo'

function App() {
  const {bookslist} = Bookslist;
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home bookslist={bookslist}/>} />
        <Route exact path="/books" element={<Books bookslist={bookslist} />}/>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/books/:id" element={<Bookinfo />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App



