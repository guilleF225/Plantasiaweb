
import { useEffect} from 'react'
import './App.css'
import Header from './componentes/Header'
import SectionContacto from './componentes/SectionContacto'
import SectionNosotros from './componentes/SectionNosotros'
import SectionProductos from './componentes/SectionProductos'
import RevealOnScroll from './componentes/RevealOnScroll'

function App() {

  
  useEffect(() => {
    document.title = 'Plantasia - Medicina Natural'

  })

  return (
    <div className='bgimg'>
      <Header />
      <main className='container'>
        <RevealOnScroll>
          <SectionNosotros />
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionProductos />
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionContacto />
        </RevealOnScroll>
      </main>
      <footer className='flex flex-row justify-evenly items-center'>
        <nav>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Nuestros Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            
            <li><a href="#">Youtube</a></li>
          </ul>
        </nav>
      </footer>
    </ div>
  )
}

export default App
