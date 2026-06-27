import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './Pages/Game';
import Login from './Pages/Login';
import Ranking from './Pages/Ranking';
import NavBar from './Components/NavBar'

  // menuList as example
   const listOptions = [
        {name: 'Game', link: '/Game'},
        {name: 'Login', link: '/Login'},
        {name: 'ranking', link: '/Ranking'}
    ]

      const imageUrl = 'image' //for example 



export default function App() {
  return (
    <BrowserRouter>

    {/*implement the navBar component*/}
    <div className="nav-container">
      <NavBar menuList={listOptions} logoUrl={imageUrl} />
    </div>

    <Routes>
      <Route path='/Game' element={<Game/>}/>
      <Route path='/Ranking' element={<Ranking/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}
