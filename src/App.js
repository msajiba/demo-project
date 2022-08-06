import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login';
import AddBanner from './pages/Dashboard/AddBanner';
import AddUser from './pages/Dashboard/AddUser';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import User from './pages/User/User';

function App() {


  return (
    <>
        <Header />

        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='dashboard' element={<Dashboard />}>
              <Route index element={<AddUser />}> </Route>
              <Route path='banner' element={<AddBanner />}> </Route>
            </Route>
            <Route path='login' element={<Login> </Login>}> </Route>
            <Route path='user' element={ <User /> }> </Route>
        </Routes>

    </>
  );
}

export default App;
