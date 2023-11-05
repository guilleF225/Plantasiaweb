function Header() {
    return(
    <header className="sticky top-0 flex flex-row justify-evenly items-center shadow w-full h-16" >

    <img src='/public/logonegro.png' alt="logo" className='h-16' />
    <nav>
      <ul className='flex padding-3 flex-row space-x-4'>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Nuestros Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  </header>)
}

export default Header