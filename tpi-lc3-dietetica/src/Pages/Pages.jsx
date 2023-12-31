import {Routes, Route} from 'react-router-dom';
import AboutUs from './AboutUs';
import FrequentQuestions from './FrequentQuestions';
import LogIn from './LogIn';
import Store from './Store';
import Cart from './Cart';
import CreateAccount from './CreateAccount';

const Pages = () => {
  return (
    <section className='pages-section'>
        <Routes>
          <Route path="/" exact element={<Store/>} />
          <Route path="/Store" exact element={<Store/>} />
          <Route path="/LogIn" exact element={<LogIn/>} />
          <Route path="/CreateAccount" exact element={<CreateAccount/>} />
          <Route path="/AboutUs" exact element={<AboutUs/>} />
          <Route path="/FrequentQuestions" exact element={<FrequentQuestions/>} />
          <Route path="/Cart" exact element={<Cart/>} />  
        </Routes>
    </section>
  )
}

export default Pages;
