import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import LoginForm from './Pages/Login';
import Signup from './Pages/Signup';
import Girls from './Pages/girls';
import AboutPage from './Components/About page/Aboutpage';
import Payment from './../src/Components/Paymentspage/Payment'
import Emailverified from './Pages/Emailverified';
import Measurementspage from './Pages/Measurementspage';
import Paymentsuccesfull from './Components/Paymentspage/Paymentsuccesfull';
import { BagProvider } from './Pages/BagContext';
import BagComponent from './Pages/BagComponent';
function App() {
  return (
    <BagProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<> <Home /> <Main /> <AboutPage /></>} />
        <Route path='/Home' element={<> <Home /> <Main /> <AboutPage /></>} />
        <Route path='/login' element={<> <LoginForm /> </>} />
        <Route path='/register' element={ <Signup /> } />
        <Route path='/designs' element={ <Girls /> } />
        <Route path='/About' element={ <AboutPage /> } />
        <Route path='/paymentspage' element={<Payment />} />
         <Route path='/verified' element={<Emailverified />} />
         <Route path="/measurementspage" element={<Measurementspage />} />
         <Route path='/payment-success' element={<Paymentsuccesfull />} />
         <Route path='/bag' element={<BagComponent />} />
      </Routes>
      
      <Footer />
    </Router>
    </BagProvider>
  );
}

export default App;
