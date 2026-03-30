import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/header/navBar/NavBar'
import Banner from './components/main/banner/Banner'
import Premium from './components/main/premiumTools/Premium'


function App() {


  return (
    <>
      <header>
        <NavBar/>
      </header>

      <main>
        <Banner></Banner>
        <Premium/>
      </main>

      <footer>
        {/* <Footer/> */}
      </footer>
    </>
  )
}

export default App
