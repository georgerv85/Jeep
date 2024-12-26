import React from 'react'
import './Life.css'

function Life() {
  return (
    
    <div className='life container'>

        <div className='life-text'>

            <div className='life-content'>

                <p>Έλα στην μεγάλη παρέα της Jeep Life.</p>
                <p>Το camp της Jeep είναι το μεγαλύτερο ευρωπαικό γεγονός</p>
                <p>για τους λάτρεις των Jeepers και Jeep.</p>
                <button className='btn-life'><a href='#lifeHero'>ΜΕΙΝΕΤΕ ΕΝΗΜΕΡΩΜΕΝΟΙ</a> 
                <svg xmlns="http://www.w3.org/2000/svg" id='arrow' width="18" height="18" fill="currentColor" class="bi    bi-arrow-right-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg> 
                </button>

            </div>

        </div>

    </div>
    
  )
}

export default Life
