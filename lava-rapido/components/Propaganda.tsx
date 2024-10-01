import Image from 'next/image';
import styles from '../styles/Propaganda.module.css';

const Propaganda: React.FC = () => {
  return (
    <div className={styles.propaganda}>
     
      <div className={styles.text}>
        <h2>Bem-vindo ao Lava-rápido</h2>
        <p>Seu carro limpo e brilhante em pouco tempo!</p>
      </div>

      
      <Image
        src="/images/propaganda.png"
        alt="Propaganda do Lava-rápido"
        width={800}
        height={400}
      />
    </div>
  );
};

export default Propaganda;
