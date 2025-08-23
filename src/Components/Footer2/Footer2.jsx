import React from 'react'
import './Footer2.css'
import footerIcon from '../../assets/images/logo-jeep.png'

function programms() {
  return (
    <div className='footer-lower2'>
        <h3>ΕΞΥΠΗΡΕΤΗΣΗ ΠΕΛΑΤΩΝ JEEP® 800 11 500 80.</h3>
        <img src={footerIcon} alt="" />
        <button>Web Developer: George Arvanitis</button>
        <p>Ευχαριστούμε για το ενδιαφέρον σας στη JEEP.</p>
        <p>Παρακαλούμε στείλτε το αίτημά σας για πληροφορίες ή το παράπονό σας ή την πρότασή σας στο info@jeep.gr </p> 
        <p>© 2019 FCA US LLC. Με επιφύλαξη όλων των δικαιωμάτων.Τα λογότυπα Chrysler, Jeep®, Dodge, Ram, Mopar® και το Λογότυπο με τα Πέντε Αστέρια είναι καταχωρημένα εμπορικά σήματα της εταιρείας FCA US LLC"</p>
    </div> 
  )
}

export default programms
