import React from 'react';
import styles from '../styles/OrderList.module.css';

interface Order {
  id: number;
  marca: string;
  modelo: string;
  placa: string;
  nome: string;
  tipoLavagem: string;
}

interface OrderListProps {
  orders: Order[];
  removeOrder: (id: number) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, removeOrder }) => {
  return (
    <div className={styles.list}>
      <h2>Pedidos Anotados</h2>
      {orders.length === 0 ? (
        <p>Nenhum pedido registrado.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className={styles.order}>
            <p><strong>Marca:</strong> {order.marca}</p>
            <p><strong>Modelo:</strong> {order.modelo}</p>
            <p><strong>Placa:</strong> {order.placa}</p>
            <p><strong>Nome:</strong> {order.nome}</p>
            <p><strong>Tipo de Lavagem:</strong> {order.tipoLavagem}</p>
            <button onClick={() => removeOrder(order.id)}>Concluir</button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderList;
