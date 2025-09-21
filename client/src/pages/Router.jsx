import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'

const Index = () => {


  return (
    <>
      <Routes>
        <Route path='/*' element={<Frontend />} />
        {/* <Route path='auth/*' element={!isAuth ? <Auth /> : <Navigate to={'/'} />} /> */}
      </Routes>
    </>
  )
}

export default Index