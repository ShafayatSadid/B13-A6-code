import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/header/navBar/NavBar'
import Banner from './components/main/Banner'

function App() {


  return (
    <>
      <header>
        <NavBar/>
      </header>

      <main>
        <Banner/>
      </main>

      <footer>
        {/* <Footer/> */}
      </footer>
    </>
  )
}

export default App
