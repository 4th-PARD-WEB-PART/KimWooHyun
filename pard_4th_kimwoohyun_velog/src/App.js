import RegisterPage from './Pages/RegisterPages/RegisterPage';
import FeedPage from './Pages/FeedPage/FeedPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import EachPage from './Pages/FeedPage/EachPage';
import EditPage from './Pages/EditPage/EditPage';

function App() {
  const [isChecked,setToPage]=useState(false);
  return (

    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path='/feed' element={<FeedPage />}/>
      <Route path='/detail' element={< DetailPage/> } />
      <Route path='/each' element={<EachPage isChecked={isChecked} setToPage={setToPage}/>} />
      <Route path='/edit' element={<EditPage />} />
    </Routes>
  );
}

export default App;