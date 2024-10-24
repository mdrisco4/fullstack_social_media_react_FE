import { Outlet, Navigate, Route, Routes, useLocation, replace } from "react-router-dom";

function Layout () {
  const user = null;
  const location = useLocation()

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{from: location}} replace />
  );
}
function App() {
  return (
    <div className='w-full min-h-[100vh]'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:id>' element={<Profile />} />
        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
