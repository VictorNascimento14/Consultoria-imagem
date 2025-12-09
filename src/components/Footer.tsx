import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h2>Conecte-se conosco</h2>
          <p>
            Siga-nos nas redes sociais e fique por dentro de todas as novidades, dicas de estilo e 
            inspirações para sua transformação pessoal.
          </p>
          <a href="#contato" className={`${styles.btnPrimary} ${styles.btnSmall}`} onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>
            Contato
          </a>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerLinks}>
            <a href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection('servicos') }}>Serviços</a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre') }}>Sobre Nós</a>
            <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>Contato</a>
          </div>
          <div className={styles.footerLinks}>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerLogo}>Logo</div>
        <div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
          <p className={styles.copyright}>© 2025 Jader Átila. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

