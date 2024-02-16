import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageLyout from './Layout/PageLyout'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Cart from './Pages/Cart'
import ProtectedRoute from './Utils/Protector'
import PreLoader from './Components/PreLoader/PreLoader'

function App() {

  return (
    <>
    <PreLoader/>
    <PageLyout>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path='/cart' element={<Cart/>} exact/>
          <Route path='/' element={<Home/>} exact/>
        </Route>
        <Route path='/login' element={<Signup/>}/>
      </Routes>
    </PageLyout>
    </>
  )
}

export default App
