import React from 'react'
import './Models.css'
import icon from '../../assets/images/new1.png'
import model1icon from '../../assets/images/Anenger-icon.png'
import model2icon from '../../assets/images/Renegade-icon.png'
import model3icon from '../../assets/images/Wrangler-icon.png'
import model4icon from '../../assets/images/Compass-icon.png'
import model5icon from '../../assets/images/Cerokee-icon.png'
import jeep from '../../assets/images/new1.png'


function programms() {
  return (
    <section className='models-section' name='models'>

        <div className='models'>


            <div className='models-bottom'>

                <div className='models-box'>

                    <img src={model1icon} alt="" className='photo-models' />
                    <div className='description-models'>
                        {/* <img src={icon} alt="" className='icon' /> */}
                        <ul>
                            <h5>E-HYBRID</h5>
                            <h5>ΑΜΙΓΩΣ ΗΛΕΚΤΡΙΚΟ</h5>
                            <h5>ΘΕΡΜΙΚΟΣ ΚΙΝΗΤΗΡΑΣ</h5>
                            
                        </ul>
                    </div>

                        <h3 className='vert-models'>AVENGER</h3>
                        <p>ΑΠΟ 23.990€</p>
                
                </div>

                <div className='models-box'>
                    <img src={model2icon} alt="" className='photo-models' />
                    <div className='description-models'>
                        {/* <img src={icon} alt="" className='icon' /> */}
                        <ul>
                            <h5>4XE</h5>
                            <h5>E-HYBRID</h5>
                            
                        </ul>
                    </div>
                    <h3 className='vert-models'>RENEGADE</h3>
                    <p>ΑΠΟ 28.790€</p>
                </div>

                <div className='models-box'>
                    <img src={model3icon} alt="" className='photo-models' />
                    <div className='description-models'>
                        {/* <img src={icon} alt="" className='icon' /> */}
                        <ul>
                            <h5>4XE</h5>
                           
                        </ul>
                    </div>
                    <h3 className='vert-models'>WRANGLER</h3>
                    <p>ΑΠΟ 90.790€</p>
                </div>

                <div className='models-box'>
                    <img src={model4icon} alt="" className='photo-models' />
                    <div className='description-models'>
                        {/* <img src={icon} alt="" className='icon' /> */}
                        <ul> 
                            <h5>4XE</h5>
                            <h5>E-HYBRID</h5>
                            
                        </ul>
                    </div>
                    <h3 className='vert-models'>COMPASS</h3>
                    <p>ΑΠΟ 34.490€</p>
                </div>

                <div className='models-box'>
                    <img src={jeep} alt="" className='photo-models' />
                    
                </div>

                <div className='models-box'>
                    <img src={model5icon} alt="" className='photo-models' />
                    <div className='description-models'>
                        {/* <img src={icon} alt="" className='icon' /> */}
                        <ul>
                            <h5>4XE</h5>
                            
                        </ul>
                    </div>
                    <h3 className='vert-models'>GRAND CEROKEE</h3>
                    <p>ΑΠΟ 92.500€</p>
                </div>

            </div>

        </div>

    </section>
  )
}

export default programms
