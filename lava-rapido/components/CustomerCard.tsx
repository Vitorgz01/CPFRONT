import Image from 'next/image';
import styles from '../styles/CustomerCard.module.css';

interface CustomerCardProps {
  name: string;
  carImage: string;
  testimonial: string;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ name, carImage, testimonial }) => {
  return (
    <div className={styles.card}>
      <Image src={carImage} alt={`Carro de ${name}`} width={300} height={200} />
      <h3>{name}</h3>
      <p>"{testimonial}"</p>
    </div>
  );
};

export default CustomerCard;
