import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import Register from './pages/RegisterPage';
import Login from './pages/Login';


function App() {
  const [cardItems, setCardItems ] = useState([]);
  return (
    <div className="app">
      <Router>
        <div>
          <ToastContainer theme='dark'/>
      <Header cardItems={cardItems}/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/search" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetail cardItems={cardItems} setCardItems ={setCardItems} />}/>
          <Route path="/card" element={<Cart cardItems={cardItems} setCardItems ={setCardItems} />}/>
          <Route path="/reg" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
           </Routes>
        </div>
      </Router>
      <Footer/> 
       </div>
  );
}
export default App;
