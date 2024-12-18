import React from 'react'
import './LifeHero.css'
import life1 from '../../assets/images/life1.png'
import life2 from '../../assets/images/life2.png'

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


            <div className='rowLife2 bottomLife'>

                
                <div className='lifeBox'>
                    <h1>Η ΠΡΑΓΜΑΤΙΚΗ ΕΜΠΕΙΡΙΑ JEEP®</h1>
                    <p>Το Camp της Jeep® πάντα πρότεινε ένα πλήρες πρόγραμμα για τους επισκέπτες, το οποίο περιλαμβάνει δοκιμές εκτός δρόμου, θεωρητικά και πρακτικά μαθήματα που διοργανώνονται από το Jeep® Academy και πολλά άλλα.
                    </p>
                    <br />
                    <p>
                    Η απίστευτη ατμόσφαιρα πάρτι της εκδήλωσης περιλάμβανε πάντα στοιχεία που προκαλούσαν τον ενθουσιασμό των συμμετεχόντων όπως πτήσεις μπαλονιών, ζωντανές συναυλίες και πολλές δραστηριότητες αποκλειστικά για παιδιά και οικογένειες.
                    </p>
                    <br />
                </div>

                <div className='lifeBox'>
                    <img src={life2} alt="" className='lifePhoto'/>
                </div>

                
            </div>



        </div>

    </section>
  )
}

export default LifeHero
