import React from 'react';

const List = ({title,typeTransaction,amount }) => {

  const sign = amount < 0 ? '-' : '+';
  
  return (
    <div className="transaction-container">

      <div className="transaction-description">
        <p>{title}</p>
        <p className={amount < 0 ? 'negativo' : 'positivo'}>{typeTransaction}</p>
      </div>

      <div className={amount < 0 ? 'negativo' : 'positivo'}>
           <h2>{sign}${Math.abs(amount).toFixed(2)}</h2>
      </div>

    </div>
  );
}

export default List;