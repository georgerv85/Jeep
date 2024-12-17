import React from 'react'
import './News.css'
import new1 from '../../assets/images/carousel3.jpg'
import new2 from '../../assets/images/carousel4.jpg'
import new3 from '../../assets/images/image5.png'
import icon from '../../assets/images/new1.png'
import vert1 from '../../assets/images/vertical1.png'
import vert2 from '../../assets/images/vertical2.png'
import vert3 from '../../assets/images/vertical3.png'
import arrow from '../../assets/images/arrow.png'
function programms() {
  return (
    <section className='programms-section' name='programms'>

        <div className='programms'>

            <div className='row'>
                
                <h2>Τα νέα μας</h2>
                <p>Ανακαλύψτε τα νεότερα οχήματά μας και τις προσφορές μας</p>
            </div>

            <div className='row programm-bottom'>

                <div className='programm-box'>
                    <img src={vert1} alt="" className='photo' />
                    <div className='description'>
                        <img src={icon} alt="" className='icon' />
                        <p>Renegade</p>
                    </div>
                    <p className='vert'>Ανακαλύψτε Περισσότερα<img src={arrow} alt="arrow" className='arrow' /></p>
                </div>

                <div className='programm-box'>
                    <img src={vert2} alt="" className='photo' />
                    <div className='description'>
                        <img src={icon} alt="" className='icon' />
                        <p>Compass</p>
                    </div>
                    <p className='vert'>Ανακαλύψτε Περισσότερα<img src={arrow} alt="arrow" className='arrow' /></p>
                </div>

                <div className='programm-box'>
                    <img src={vert3} alt="" className='photo' />
                    <div className='description'>
                        <img src={icon} alt="" className='icon' />
                        <p>Wrangler</p>
                    </div>
                    <p className='vert'>Ανακαλύψτε Περισσότερα<img src={arrow} alt="arrow" className='arrow' /></p>
                </div>

            </div>

        </div>

    </section>
  )
}

export default programms
