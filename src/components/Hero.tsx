import styles from './Hero.module.css'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className={styles.hero}>
      <h1>Transforme sua imagem, transforme sua vida</h1>
      <p>
        Descubra o poder da sua imagem pessoal e como ela pode abrir portas para novas oportunidades. 
        Nossa equipe especializada está pronta para ajudá-lo a expressar sua melhor versão através de 
        uma análise completa de estilo e consultoria personalizada.
      </p>
      <div className={styles.heroButtons}>
        <a href="#contato" className={styles.btnPrimary} onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>
          Agendar
        </a>
        <a href="#servicos" className={styles.btnSecondary} onClick={(e) => { e.preventDefault(); scrollToSection('servicos') }}>
          Saiba mais
        </a>
      </div>
      <div className={styles.heroImagePlaceholder}>
        
      </div>
    </section>
  )
}

export default Hero

