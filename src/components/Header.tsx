import { useEffect, useState, useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    // Garantir que o header fique fixo
    if (headerRef.current) {
      headerRef.current.style.position = 'fixed'
      headerRef.current.style.top = '0'
      headerRef.current.style.left = '0'
      headerRef.current.style.right = '0'
      headerRef.current.style.width = '100vw'
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false) // Fechar menu ao clicar em um link
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header 
        ref={headerRef}
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100vw' }}
      >
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection('servicos') }}>Serviços</a></li>
            <li><a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre') }}>Sobre</a></li>
            <li><a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>Contato</a></li>
          </ul>
        </nav>
        <a href="#contato" className={styles.btnAgendar} onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>
          Agendar
        </a>
        <button 
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>
      {isMenuOpen && <div className={styles.menuOverlay} onClick={toggleMenu} />}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            <li>
              <a href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection('servicos') }}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre') }}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>
                Contato
              </a>
            </li>
            <li>
              <a 
                href="#contato" 
                className={styles.mobileBtnAgendar}
                onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}
              >
                Agendar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header

