import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Home from './pages/Home';
import Admin from './pages/Admin';
import MyBag from './pages/MyBag';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <Main/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/add-product' element={<AddProduct/>}/>
        <Route path='/my-bag' element={<MyBag/>}/>
      </Routes>
    </div>
  );
}

export default App;
