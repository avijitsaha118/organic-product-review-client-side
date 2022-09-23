import logo from './logo.svg';
import './App.css';
import Header from './shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './login/Login';
import Register from './login/Register';
import RequireAuth from './login/RequireAuth';
import ManageInfo from './pages/ManageInfo';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <div>
      <Header>

      </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/manage' element={
          <RequireAuth>
            <ManageInfo></ManageInfo>
          </RequireAuth>
        }></Route>

<Route path='/information' element={
          <RequireAuth>
           <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

      </Routes>

    </div>
  );
}

export default App;
