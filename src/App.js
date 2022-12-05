import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Randomshit from './randomshit'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Randomshit />}>
      <Route index element={<Randomshit />} />
    </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


