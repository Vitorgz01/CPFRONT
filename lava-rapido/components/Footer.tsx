// components/Footer.tsx
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Nome dos Participantes</p>
      <p>RM123456 - João Silva</p>
      <p>RM234567 - Maria Oliveira</p>
      <p>RM345678 - Pedro Santos</p>
      {/* Adicione mais participantes conforme necessário */}
    </footer>
  );
};

export default Footer;
