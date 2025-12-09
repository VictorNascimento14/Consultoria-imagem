import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact} id="contato">
      <div className={styles.contactContent}>
        <h2>Fale conosco</h2>
        <p>
          Estamos prontos para ajudá-lo em sua jornada de transformação. Entre em contato conosco e 
          agende sua consultoria personalizada.
        </p>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <MdEmail />
          </div>
          <span>Email: contato@seudominio.com</span>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <MdPhone />
          </div>
          <span>Telefone: (XX) XXXX-XXXX</span>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <MdLocationOn />
          </div>
          <span>Endereço: Rua X, 123, Cidade, Estado</span>
        </div>
      </div>
    </section>
  )
}

export default Contact

