import { Suspense, useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/header/navBar/NavBar'
import Banner from './components/main/banner/Banner'
import Premium from './components/main/premiumTools/Premium'
import GetStarted from './components/main/getStarted/GetStarted'
import Transparent from './components/main/transparent/Transparent'
import WorkFlow from './components/main/workFlow/WorkFlow'


function App() {

  const plansPromise = fetch('/plans.json').then(res => res.json())


  // selected carts handler
  const [selectedCarts, setSelectedCarts] = useState([])
  // btn theme
  const [btnTheme, setBtnTheme] = useState("products")

  return (
    <>
      <header>
        <NavBar selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} btnTheme={btnTheme} setBtnTheme={setBtnTheme} />
      </header>

      <main>
        <Banner />

        <Suspense fallback={<div className='flex justify-center items-center mx-auto my-20'>
          <span className="loading loading-dots loading-md"></span>

        </div>}>
          <Premium plansPromise={plansPromise} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} btnTheme={btnTheme} setBtnTheme={setBtnTheme} />
        </Suspense>


        <GetStarted />

        <Transparent/>

        <WorkFlow/>

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
