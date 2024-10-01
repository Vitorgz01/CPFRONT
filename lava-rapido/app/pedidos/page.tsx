// app/pedidos/page.tsx
'use client';

import { useState } from 'react';
import OrderForm from '../../components/OrdemForm';
import OrderList from '../../components/OrderList';
import styles from '../../styles/Pedidos.module.css';

interface Order {
  id: number;
  marca: string;
  modelo: string;
  placa: string;
  nome: string;
  tipoLavagem: string;
}

const Pedidos: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    setOrders([order, ...orders]);
  };

  const removeOrder = (id: number) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div className={styles.container}>
      <OrderForm addOrder={addOrder} />
      <OrderList orders={orders} removeOrder={removeOrder} />
    </div>
  );
};

export default Pedidos;
