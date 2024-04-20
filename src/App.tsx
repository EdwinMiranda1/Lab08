import React from 'react';

interface Props {
  buyList: string[];
}

const ShoppingList: React.FC<Props> = ({ buyList }) => {
  return (
    <div>
      <h2>Compras de la semana</h2>
      <ul>
        {buyList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
