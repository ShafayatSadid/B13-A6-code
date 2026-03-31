import { Suspense } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/header/navBar/NavBar'
import Banner from './components/main/banner/Banner'
import Premium from './components/main/premiumTools/Premium'


function App() {

  const plansPromise = fetch('/plans.json').then(res => res.json())

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Banner></Banner>
        <Suspense fallback={<div className='flex justify-center items-center mx-auto my-20'>
          <span className="loading loading-dots loading-md"></span>
        </div>}>
          <Premium plansPromise={plansPromise}/>
        </Suspense>

      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
