import React, { useState } from 'react';
import styles from '../styles/OrderForm.module.css';

interface Order {
  id: number;
  marca: string;
  modelo: string;
  placa: string;
  nome: string;
  tipoLavagem: string;
}

interface OrderFormProps {
  addOrder: (order: Order) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ addOrder }) => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [nome, setNome] = useState('');
  const [tipoLavagem, setTipoLavagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (marca && modelo && placa && nome && tipoLavagem) {
      const newOrder: Order = {
        id: Date.now(),
        marca,
        modelo,
        placa,
        nome,
        tipoLavagem,
      };
      addOrder(newOrder);
      // Resetar campos
      setMarca('');
      setModelo('');
      setPlaca('');
      setNome('');
      setTipoLavagem('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Registrar Pedido</h2>
      <input
        type="text"
        placeholder="Marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Placa"
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do Dono"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <select
        value={tipoLavagem}
        onChange={(e) => setTipoLavagem(e.target.value)}
        required
      >
        <option value="">Tipo de Lavagem</option>
        <option value="Completa">Completa</option>
        <option value="Simples">Simples</option>
        <option value="Intermediária">Intermediária</option>
      </select>
      <button type="submit">Adicionar Pedido</button>
    </form>
  );
};

export default OrderForm;
