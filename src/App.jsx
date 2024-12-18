import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import HomeHero from './Components/HomeHero/HomeHero'
import Models from "./Components/Models/Models"
import Navbar2 from "./Components/Navbar2/Navbar2"
import Footer from "./Components/Footer/Footer"
import Footer2 from "./Components/Footer2/Footer2"
import News from './Components/News/News'
import Life from "./Components/Life/Life"
import LifeHero from "./Components/LifeHero/LifeHero"
import Buy from "./Components/Buy/Buy"



function App(){

  return (
    <>

    <BrowserRouter>

      <Navbar />
      <Navbar2 />

      <main>
        <Routes>

          <Route path="/" element={

            <>
            <HomeHero />
            <hr style={{ height: '4px', backgroundColor: 'black', border: 'none' }} />
            <News />
            <Footer />
            <Footer2 />
            </>

          } />

          <Route path="/models" element={

            <>
            <Models/>
            <Footer />
            <Footer2 />
            </>


          } />

          <Route path="/jeep-life" element={

            <>
            <Life />
            <LifeHero />
            <Footer />
            <Footer2 />
            </>

          } />

        <Route path="/buy" element={

          <>
          <Buy />
          <Footer />
          <Footer2 />
          </>

        } />



        </Routes>
      </main>
    
    </BrowserRouter>

    </>

  )

}
export default App
