import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { OrderSummery } from './components/childRoute/OrderSummery';
import Nomatch from './components/errorpage/Nomatch.';
import Product from './components/childRoute/Product';
import NewProduct from './components/childRoute/NewProduct';
import FeaturedProduct from './components/childRoute/featuredProduct';
import Users from './components/dynamic/user';
import UserDetails from './components/dynamic/UserDetails';
import Admin from './components/dynamic/Admin';
import Parama from './components/params/Parama';
import SearchParam from './components/searchparam/SearchParam';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About/>}/>
        <Route path='order-summary' element={<OrderSummery/>}/>
        <Route path='*' element={<Nomatch/>}/>

        {/* nested router start */}
        <Route path='product' element={<Product/>}>
          <Route path='feature' element={<FeaturedProduct/>}/>
          <Route path='new' element={<NewProduct/>}/>
        </Route>
        {/* nested router end */}

        {/* dynamic router start  */}
        <Route path='users' element={<Users/>}/>
        {/* <Route path='users/:userId' element={<UserDetails/>}/> */}
        <Route path='users/admin' element={< Admin/>}/>
        {/* dynamic router end  */}

        <Route path='users/:userId' element={<Parama/>}/>
        
        {/* search parameter  */}
        <Route path='search' element={< SearchParam/>}/>
      </Routes>
    </>
  );
}

export default App;
