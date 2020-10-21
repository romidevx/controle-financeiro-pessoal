import React from 'react';

const List = ({title,typeTransaction,amount }) => {

  const sign = typeTransaction === 'Deposito' ? '+' : '-';
  
  return (
    <div className="transaction-container">

      <div className="transaction-description">
        <p>{title}</p>
        {/* <p className={typeTransaction === 'Deposito' ? 'positivo' : 'negativo'}>{typeTransaction}</p>  */}
      </div>

      <div className={typeTransaction === 'Deposito' ? 'positivo' : 'negativo'}>
           <h3>{sign}${Math.abs(amount).toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default List;