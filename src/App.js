import React from 'react';
import './App.css';

// COMPONENTS 
import Form from './components/Form';
import Transactions from './components/Transactions';

// REDUX IMPORTS
import {useSelector} from 'react-redux';

const App = () => {

  // STORE DATA
  const transactions = useSelector(state => state.transactions);
  console.log(transactions);

  // DEPOSITOS TOTAL
  const depositosFilter = transactions.filter( deposito => deposito.typeTransaction === 'Deposito');
  const depositosTotal  = depositosFilter.reduce( (acumulator,valor) =>  (acumulator + valor.amount),0);
  
  // DESPESAS TOTAL
  const despesasFilter = transactions.filter( deposito => deposito.typeTransaction === 'Despesa');
  const despesasTotal  = despesasFilter.reduce( (acumulator,valor) =>  (acumulator + valor.amount),0);

  // BALANÇO TOTAL  
  const amounts = transactions.map(valor => valor.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  console.log('depositos -> ',       depositosFilter);
  console.log('Valor depositos -> ', depositosTotal);

  console.log('despesas -> ',       despesasFilter);
  console.log('Valor despesas -> ', despesasTotal);

  return (

    <div className="app">
      <h3 className="app-title">Controle Financeiro</h3>

      <div className="balanco-container">

        <div className="balanco-total-container">
          <p>Saldo Total:</p>
          <h1 >${Math.abs(total).toFixed(2)}</h1>
        </div>

        <div className="balanco-valores-container">
          <h5 >Depósitos: ${Math.abs(depositosTotal).toFixed(2)}</h5>
          <h5 >Despesas:  -${Math.abs(despesasTotal).toFixed(2)}</h5>
        </div>
        
      </div>

      <div className="transactions-list">
          {
            transactions.map( ({ id,title,typeTransaction,amount }) => {
              return ( 
                        <Transactions 
                        key={id}
                        title={title}
                        typeTransaction={typeTransaction}
                        amount={amount}
                        /> 
              )
            }).reverse()
          }
       </div>

       <Form/>
        
    </div>
  );
}

export default App;
