import React from 'react'
import './Buy.css'
import buy1 from '../../assets/images/Anenger-icon.png'
import buy2 from '../../assets/images/Renegade-icon.png'
import buy3 from '../../assets/images/Wrangler-icon.png'
import buy4 from '../../assets/images/Compass-icon.png'
import buy5 from '../../assets/images/Cerokee-icon.png'

function Buy() {
  return (
    <section className='buySection' >
    
                
    
            <div className='buyHero-container'>
    
                <div className='rowBuy1'>
    
                    {/* <h3>ΧΑΜΕΝΟΙ ΣΤΗΝ ΠΕΡΙΠΕΤΕΙΑ</h3> */}
    
                </div>
    
                <div className='rowBuy2 bottomBuy'>
    
                    <div className='buyBox'>
                        <h3>AVENGER</h3>
                        <img src={buy1} alt="" className='buyPhoto'/> 
                        <button className='buttonBuy'>ΑΓΟΡΑΣΤΕ ΤΩΡΑ ΑΠΟ 23.500</button>
                    </div>
                    

    
                    {/* <div className='buyBox'>
                        <h3>AVENGER</h3>2
                        <p>Το Camp της Jeep® είναι το βασικό γεγονός για το Jeep® Owners Group (JOG) και έχει προσελκύσει, κατά τη διάρκεια των ετών, μαζική συμμετοχή από όλη την Ευρώπη.
                        </p>
                    </div> */}

                    <div className='buyBox'>
                        <h3>RENEGADE</h3>
                        <img src={buy2} alt="" className='buyPhoto'/>
                        <button className='buttonBuy'>ΑΓΟΡΑΣΤΕ ΤΩΡΑ ΑΠΟ 23.500</button>
                    </div>

    
                    {/* <div className='buyBox'>
                        <h3>RENEGADE</h3>
                        <p>Το Camp της Jeep® είναι το βασικό γεγονός για το Jeep® Owners Group (JOG) και έχει προσελκύσει, κατά τη διάρκεια των ετών, μαζική συμμετοχή από όλη την Ευρώπη.
                        </p>
                    </div> */}

                    <div className='buyBox'>
                        <h3>WRANGLER</h3>
                        <img src={buy3} alt="" className='buyPhoto'/>
                        <button className='buttonBuy'>ΑΓΟΡΑΣΤΕ ΤΩΡΑ ΑΠΟ 23.500</button>
                    </div>

    
                    {/* <div className='buyBox'>
                        <h3>WRANGLER</h3>
                        <p>Το Camp της Jeep® είναι το βασικό γεγονός για το Jeep® Owners Group (JOG) και έχει προσελκύσει, κατά τη διάρκεια των ετών, μαζική συμμετοχή από όλη την Ευρώπη.
                        </p>
                    </div> */}

                    <div className='buyBox'>
                        <h3>COMPASS</h3>
                        <img src={buy4} alt="" className='buyPhoto'/>
                        <button className='buttonBuy'>ΑΓΟΡΑΣΤΕ ΤΩΡΑ  ΑΠΟ 23.500</button>
                    </div>

    
                    {/* <div className='buyBox'>
                        <h3>COMPASS</h3>
                        <p>Το Camp της Jeep® είναι το βασικό γεγονός για το Jeep® Owners Group (JOG) και έχει προσελκύσει, κατά τη διάρκεια των ετών, μαζική συμμετοχή από όλη την Ευρώπη.
                        </p>
                    </div> */}

                    <div className='buyBox'>
                        <h3>GRAND CHEROKEE</h3>
                        <img src={buy5} alt="" className='buyPhoto'/>
                        <button className='buttonBuy'>ΑΓΟΡΑΣΤΕ ΤΩΡΑ  ΑΠΟ 23.500</button>
                    </div>
    
                    
                </div>
    
    
            </div>
    
        </section>
  )
}

export default Buy
