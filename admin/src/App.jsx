import {Route, Routes} from 'react-router-dom'
import User from './pages/user/User'
import Sidebar from './layout/Sidebar'
import ProductAdd from './pages/product/ProductAdd'
import Reservation from './pages/reservation/Reservation'

function App() {

  return (
   <>
   <Sidebar>
   <Routes>
<Route path='/user' element={<User/>}/>
<Route path='/productadd' element={<ProductAdd/>}/>
<Route path='/reservation' element={<Reservation/>}/>
{/* <Route path='/order' element={<Order/>}/> */}
   </Routes>
   </Sidebar>
   </>
  )
}

export default App
