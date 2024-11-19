import React from 'react'
import './Navbar.css'
import { NavLink ,Outlet} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='w-screen gap-5 bg-gray p-5 fixed'>
      <div className="logo text-4xl">
        <p className='inline text-gray-400  '>WORLD</p><p className='inline font-semibold text-red-600'>NEWS</p>
      </div>
      <ul className='flex gap-4 items-center text-base text-gray-300 mt-4'>
        <li className='hover:text-white'><NavLink className={(e)=>{return e.isActive?"text-white":""}} to="/"> HOME </NavLink></li>      
        <li className='hover:text-white'><NavLink className={(e)=>{return e.isActive?"text-white":""}} to="/sports"> SPORTS </NavLink></li>
        <li className='hover:text-white'><NavLink className={(e)=>{return e.isActive?"text-white":""}} to="/business"> BUSINESS </NavLink></li>    
        <li className='hover:text-white'><NavLink className={(e)=>{return e.isActive?"text-white":""}} to="/entertainment"> ENTERTAINMENT</NavLink></li>
        <li className='hover:text-white'><NavLink className={(e)=>{return e.isActive?"text-white":""}} to="/health"> HEALTH </NavLink></li>
        <li className='hover:text-white'><NavLink className={(e)=>{return e.isActive?"text-white":""}} to="/science"> SCIENCE </NavLink></li>   
        <li className='hover:text-white'><NavLink className={(e)=>{return e.isActive?"text-white":""}} to="/technology"> TECHNOLOGY </NavLink></li>

      </ul>
   

    </nav>
  )
}

export default Navbar