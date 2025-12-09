import styles from './Services.module.css'

const Services = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className={styles.services} id="servicos">
      <h2>O que oferecemos para sua transformação</h2>
      <p>
        Oferecemos serviços completos de consultoria de imagem e estilo pessoal, adaptados às suas 
        necessidades e objetivos. Nossa abordagem combina análise profissional com orientação prática 
        para garantir resultados duradouros.
      </p>
      
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <div className={styles.serviceImagePlaceholder} style={{ height: '450px' }}>
            <img src="/foto3.png" alt="" />
          </div>
          <div className={styles.serviceCardContent}>
            <h3>Análise de estilo pessoal</h3>
            <p>
              Uma análise completa do seu estilo atual, identificando pontos fortes e oportunidades 
              de melhoria para criar uma imagem autêntica e impactante.
            </p>
          </div>
        </div>
        
        <div className={styles.serviceCard}>
          <div className={styles.serviceImagePlaceholder} style={{ height: '450px' }}>
            <img src="/foto1.png" alt="" />
          </div>
          <div className={styles.serviceCardContent}>
            <h3>Consultoria de guarda-roupa</h3>
            <p>
              Otimize seu guarda-roupa existente e descubra como criar combinações versáteis que 
              expressam sua personalidade e se adequam a diferentes ocasiões.
            </p>
          </div>
        </div>
        
        <div className={styles.serviceCard}>
          <div className={styles.serviceImagePlaceholder} style={{ height: '450px' }}>
            <img src="/foto2.png" alt="" />
          </div>
          <div className={styles.serviceCardContent}>
            <h3>Preparação para momentos importantes</h3>
            <p>
              Prepare-se para entrevistas, apresentações, eventos especiais e outras ocasiões 
              importantes com confiança e estilo impecável.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.servicesButtons}>
        <a href="#contato" className={`${styles.btnPrimary} ${styles.btnSmall}`} onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>
          Agendar
        </a>
        <a href="#sobre" className={`${styles.btnSecondary} ${styles.btnSmall}`} onClick={(e) => { e.preventDefault(); scrollToSection('sobre') }}>
          Saiba mais
        </a>
      </div>
    </section>
  )
}

export default Services

