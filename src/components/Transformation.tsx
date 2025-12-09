import styles from './Transformation.module.css'

const Transformation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className={styles.transformation}>
      <h2>Sua transformação começa agora</h2>
      <p>
        Não espere mais para investir em si mesmo. A primeira consulta é o primeiro passo em direção 
        a uma imagem que reflete quem você realmente é e onde quer chegar.
      </p>
      <div className={styles.transformationButtons}>
        <a href="#contato" className={styles.btnPrimary} onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>
          Agendar Consultoria
        </a>
        <a href="#servicos" className={styles.btnSecondary} onClick={(e) => { e.preventDefault(); scrollToSection('servicos') }}>
          Saiba mais
        </a>
      </div>
    </section>
  )
}

export default Transformation

