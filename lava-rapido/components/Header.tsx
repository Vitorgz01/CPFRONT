'use client'; 
import Link from 'next/link';
import styles from '../styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pedidos">Pedidos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
