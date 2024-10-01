import CustomerCard from '../components/CustomerCard';
import Propaganda from '../components/Propaganda';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const customers = [
    {
      name: 'Carlos Souza',
      carImage: '/images/carro1.png', 
      testimonial: 'Excelente serviço, meu carro ficou como novo!',
    },
    {
      name: 'Ana Pereira',
      carImage: '/images/carro2.png',
      testimonial: 'Rápido e eficiente, recomendo a todos!',
    },
  ];

  return (
    <div>
      <Propaganda /> 

      <div className={styles.cardsContainer}>
        {customers.map((customer, index) => (
          <CustomerCard
            key={index}
            name={customer.name}
            carImage={customer.carImage} 
            testimonial={customer.testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
