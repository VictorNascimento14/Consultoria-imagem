import styles from './WhoWorks.module.css'

const WhoWorks = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className={styles.whoWorks} id="sobre">
      <div className={styles.whoWorksContent}>
        <h2>Quem trabalha com imagem sabe o valor da prática</h2>
        <p>
          Nossa experiência no mercado de consultoria de imagem nos ensinou que a teoria só funciona 
          quando aplicada na prática. Trabalhamos com você de forma personalizada, garantindo que 
          cada recomendação seja adaptada ao seu estilo de vida, personalidade e objetivos profissionais.
        </p>
        <a href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection('servicos') }}>
          Saiba mais →
        </a>
      </div>
      <div className={styles.whoWorksImagePlaceholder}>
        <img src="/foto6.jpg" alt="" />
      </div>
    </section>
  )
}

export default WhoWorks

