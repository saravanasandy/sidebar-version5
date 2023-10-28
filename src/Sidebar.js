import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import 
{FaHome}
 from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <FaHome  className='icon_header'/> CSO
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <NavLink to="/dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                    </NavLink>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to="/product">
                    <BsFillArchiveFill className='icon'/> Products
                    </NavLink>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to="/categories">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                    </NavLink>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to="/customer">
                    <BsPeopleFill className='icon'/> Customers
                    </NavLink>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to="/inventory">
                    <BsListCheck className='icon'/> Inventory
                    </NavLink>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to="/reports">
                    <BsMenuButtonWideFill className='icon'/> Reports
                    </NavLink>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to="/Settings">
                    <BsFillGearFill className='icon'/> Setting
                    </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar