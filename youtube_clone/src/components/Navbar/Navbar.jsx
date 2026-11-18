import React from 'react'
import './Navbar.css'
import menu_icon1 from '../../assets/menu_icon1.png'
import logo1 from '../../assets/logo1.png'
import search_icon from '../../assets/search.png'
import add from '../../assets/add.webp'
import notice from '../../assets/notification.png'
import profile from '../../assets/simon.png'
import { Link } from 'react-router-dom'
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-dev'>
        <div className="nav-left flex-dev">
             <img className='menu-icon' src={menu_icon1} alt="menu" onClick={()=>setSidebar(prev=>prev===false?true:false)} />
             <Link to='/'><img className='logo' src={logo1} alt="logo" /></Link> 
        </div>
        <div className="nav-middle flex-dev">
               <div className="search_box flex-dev">
                      <input type="text" placeholder='Search' />
                      <span class="material-symbols-outlined" style={{color:'white'}}>search</span>
                      
               </div>
              
        </div>
        <div className="nav-right flex-dev">
            <div className="create">
                    <span className='add' class="material-symbols-outlined" style={{borderRadius:'25px'}}>add</span>
                    <span >Create</span>
            </div>
              
               {/* <img src={notice} alt="" /> */}
               <span className='notice' class="material-symbols-outlined" style={{color:'white'}}>notifications</span>
               <img src={profile} className='user_icon' alt="" />
        </div>
    </nav>
  )
}

export default Navbar