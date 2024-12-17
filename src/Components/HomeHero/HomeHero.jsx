import React from 'react'
import { Link } from "react-router-dom"
import './HomeHero.css'
import photo1 from '../../assets/images/carousel1.png'
import photo2 from '../../assets/images/carousel3.jpg'
import photo3 from '../../assets/images/carousel4.jpg'
import Programms from '../News/News'

function HomeHero() {
  return (

    <div className='hero container'>

      <div className='hero-text'>

        <h1>ΝΕΟ Jeep Compass</h1>
        <h2>4xe Hybrid</h2>

        <div className='content'>

          <p>Η Jeep παρουσιάζει το νέο σύμβολο του υβριδισμού.</p>
          <p>Το νέο Jeep Compass είναι πιο ισχυρό,έχει μεγάλη ικανότητα<br />
            προσπέλασης ύδατος και συνεχίζει...
          </p>
          <button className='btn-hero'>ΑΝΑΚΑΛΥΨΤΕ ΠΕΡΙΣΣΟΤΕΡΑ 
            <svg xmlns="http://www.w3.org/2000/svg" id='arrow' width="18" height="18" fill="currentColor" class="bi    bi-arrow-right-square" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg> 
          </button>

        </div>

      </div>
      
    </div>
    
    

  )
}



export default HomeHero
