import React from 'react'
//import Login from './Component/login'
import Create from './Component/create'
import { Routes, Route } from "react-router-dom"
import EmpLogin from './Component/empLogin'
import Login from './Component/login'
import EmpDetails from './Component/EmpDetails'
import SingleDetails from './Component/empDetail'
import Homepage from './Component/Homepage'
import AdminDashboard from './Component/adminDashboard'
import EmpStatus from './Component/empStatus'
import Task from './Component/Task'
import Attandance from './Component/empAt'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/emp" element={<EmpLogin />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/details" element={<EmpDetails />} />
      <Route path="/create" element={<Create />} />
      <Route path="/emp/:id" element={<SingleDetails />} />
      <Route path="/admindash" element={<AdminDashboard />} />
      <Route path="/empstatus" element={<EmpStatus />} />
      <Route path="/task" element={<Task />} />
      <Route path="/attend" element={<Attandance />} />
    </Routes>
  )
}

export default App