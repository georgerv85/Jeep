import React,{useState} from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'
import logo from '../../assets/images/logo-jeep.png'
import menuIcon from '../../assets/images/icon.png'

function Navbar() {

  const [x,setx] = useState(false)   // Η μεταβλητή x == false => 'hide-menu'
    
  function changeMenu (){           // Όταν κάνω onclick(changeMenu) στο menuIcon το x == true => 'navbar-main'
    setx(!x);
  }

  return (

    <nav className='container'>

      <Link to="/"><img src={logo} alt="logo" className='logo' /></Link>

      <ul className= {x ? 'navbar-main ' : 'hide-menu' }>
        <li><Link to="/models">MΟΝΤΕΛΑ</Link></li>
        <li><Link to="/buy">ΑΓΟΡΑ</Link></li>
        <li><Link to="/owners">ΙΔΙΟΚΤΗΤΕΣ</Link></li>
        <li><Link to="/jeep-life">JEEP LIFE</Link></li>
        <li><Link to="/hybrid">4XE - HYBRID</Link></li>
        <li><Link to="/offers">ΠΡΟΣΦΟΡΕΣ</Link></li>
      </ul>

      <div className='textbox-container'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg> 
        <input type="text" id='search' className='input-text' placeholder='Αναζήτηση' />
      </div>

      <img src={menuIcon} alt="menu-icon" className='menu-icon' onClick={changeMenu} />
      
    </nav>

  )
}

export default Navbar
