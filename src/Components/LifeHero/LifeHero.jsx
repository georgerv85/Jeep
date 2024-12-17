import React from 'react'
import './LifeHero.css'
import life1 from '../../assets/images/life1.png'

function LifeHero() {
  return (

    <section className='lifeSection' >

            

        <div className='lifeHero-container'>

            <div className='rowLife1'>

                <h1>ΧΑΜΕΝΟΙ ΣΤΗΝ ΠΕΡΙΠΕΤΕΙΑ</h1>

            </div>

            <div className='rowLife2 bottomLife'>

                <div className='lifeBox'>
                    <img src={life1} alt="" className='lifePhoto'/>
                </div>

                <div className='lifeBox'>
                    <h1>ΕΚΕΙ ΠΟΥ ΤΟ ΠΝΕΥΜΑ ΤΗΣ JEEP® ΖΩΝΤΑΝΕΥΕΙ</h1>
                    <p>Το Camp της Jeep® είναι το βασικό γεγονός για το Jeep® Owners Group (JOG) και έχει προσελκύσει, κατά τη διάρκεια των ετών, μαζική συμμετοχή από όλη την Ευρώπη.
                    </p>
                    <br />
                    <p>
                        Οι λάτρεις και οι ιδιοκτήτες της Jeep® ενώνονται για να επιβεβαιώσουν τον ειδικό δεσμό που υπάρχει μεταξύ της μάρκας Jeep® και της κοινότητάς της.
                    </p>
                    <br />
                    <p>
                    Ήταν πάντα μια μοναδική ευκαιρία να διασκεδάσετε και να ζήσετε αξέχαστες περιπέτειες.
                    </p>
                </div>




            </div>

            



            {/* <div className='lifeContent'>
                <h1>ΕΚΕΙ ΠΟΥ ΤΟ ΠΝΕΥΜΑ ΤΗΣ JEEP®
                ΖΩΝΤΑΝΕΥΕΙ</h1>

                <p>Το Camp της Jeep® είναι το βασικό γεγονός για το Jeep® Owners Group (JOG) και έχει προσελκύσει, κατά τη     διάρκεια    των ετών, μαζική συμμετοχή από όλη την Ευρώπη.
                </p>
                <p>
                    Οι λάτρεις και οι ιδιοκτήτες της Jeep® ενώνονται για να επιβεβαιώσουν τον ειδικό δεσμό που υπάρχει μεταξύ της μάρκας Jeep® και της κοινότητάς της.
                </p>
                <p>
                    Ήταν πάντα μια μοναδική ευκαιρία να διασκεδάσετε και να ζήσετε αξέχαστες περιπέτειες.
                </p>

            </div> */}

        </div>

    </section>
  )
}

export default LifeHero
