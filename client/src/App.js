import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Register }  from './MyProject/Register/Register';
import { Login }   from './MyProject/Login/Login';
import { Admindashboard }   from './MyProject/Admindashboard/Admindashboard';
import { Clientdashboard } from './MyProject/Clientdashboard/Clientdashboard';
import { Home } from './MyProject/Home/Home';
import { Nav } from './MyProject/Navbar/Nav';
import { Getsingle } from './MyProject/Getsingle/Getsingle';
import { Adduser } from './MyProject/Adduser/Adduser';
import { Update } from './MyProject/Update/Update';
import  { Removeuser }  from './MyProject/Removeuser/Removeuser';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Nav/>,<Login/>]}/>
      <Route path='/Login' element={[<Nav/>,<Login/>]}/>
      <Route path='/Register' element={[<Nav/>,<Register/>]}/>
      <Route path='/Home' element={[<Nav/>,<Home/>]}/>
      <Route path='/Getsingle/:pid' element={[<Nav/>,<Getsingle/>]}/>
      <Route path='/Adduser' element={[<Nav/>,<Adduser/>]}/>
      <Route path='/Removeuser/:id' element={[<nav/>,<Removeuser/>]}/>
      <Route path='/Admindashboard/:id' element={[<Nav/>,<Admindashboard/>]}/>
      <Route path='/Update/:pid' element={[<nav/>,<Update/>]}/>
      <Route path='/Clientdashboard/:id' element={[<Nav/>,<Clientdashboard/>]}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
