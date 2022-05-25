import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Kim from './kim_components/Kim';
import Shin from './shin_components/Shin';
import Yoon from './yoon_components/Yoon';
import Lee from './lee_components/Lee';
import Cho from './wonil_components/Cho';
import Park from './park/park_components/Park';
import './kim_styles/css/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/kim/*' element={<Kim />} />
          <Route path='/shin/*' element={<Shin />} />
          <Route path='/yoon/*' element={<Yoon />} />
          <Route path='/lee/*' element={<Lee />} />
          <Route path='/wonil/*' element={<Cho />} />
          <Route path='/park/*' element={<Park />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
