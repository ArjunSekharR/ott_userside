import {BrowserRouter as  Router , Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgotpassword from './components/Forgotpassword';
import Movielist from './components/Movielist';
import Subscription from './components/Subscription';
import Myplan from './components/Myplan';
import Resetpassword from './components/Resetpassword';
import Views from './components/Views';
import Watchlater from './components/Watchlater';
import Watchistory from './components/Watchistory';

function App() {
  return (
   <Router>
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgot' element={<Forgotpassword/>}/>
          <Route path='/movielist'element={<Movielist/>}/>
          <Route path='/subscribe'element={<Subscription/>}/>
          <Route path='/myplan' element={<Myplan/>}/>
          <Route path='/changepassword' element={<Resetpassword/>}/>
          <Route path="/movieview/:id" element={<Views/>} />
          <Route path='/watchlater' element={<Watchlater/>}/>
          <Route path='/watchistory'element={<Watchistory/>}/>
        </Routes>
    </div>
   </Router>
  );
}

export default App;
 