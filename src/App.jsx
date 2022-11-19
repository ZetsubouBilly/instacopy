import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage title='instafake'/>}/>
        <Route path='/:id' element={<UserPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
