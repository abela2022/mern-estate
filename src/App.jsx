import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/LogIn' element={<LogIn/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
  )
}
