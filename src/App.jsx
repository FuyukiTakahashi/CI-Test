import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './component/layout/Home';
import Active from './component/layout/Active';
import Complete from './component/layout/Complete';
import Header from './component/layout/Header';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/active' element={<Active />} />
        <Route path='/complete' element={<Complete />} />
      </Routes>
    </div>
  );
}

export default App;
