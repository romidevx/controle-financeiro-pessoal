import React from 'react';
import './App.css';

// COMPONENTS 
import Form from './components/Form';
import Transactions from './components/Transactions';

// REDUX IMPORTS
import {useSelector} from 'react-redux';

const App = () => {

  // PULL DATA FROM STORE
  const transactions = useSelector(state => state.transactions);
  //console.log(transactions);

  // DEPOSITOS TOTAL
  const depositosFilter = transactions.filter( deposito => deposito.typeTransaction === 'Deposito');
  const depositosTotal  = depositosFilter.reduce( (acumulator,valor) =>  (acumulator + valor.amount),0);
  
  // DESPESAS TOTAL
  const despesasFilter = transactions.filter( despesa => despesa.typeTransaction === 'Despesa');
  const despesasTotal  = despesasFilter.reduce( (acumulator,valor) =>  (acumulator + valor.amount),0);

   
  // BALANÇO TOTAL
  const total = depositosTotal - despesasTotal;

  // console.log('depositos -> ',       depositosFilter);
  // console.log('Valor depositos -> ', depositosTotal);

  // console.log('despesas -> ',       despesasFilter);
  // console.log('Valor despesas -> ', despesasTotal);

  return (

    <div className="app">

      <h3 className="app-title">Controle Financeiro</h3>

      <div className="balanco-container">

        <div className="balanco-total-container">
          <p>Saldo:</p>
          { 
            despesasTotal > depositosTotal 
            ? <h1 style={{color:'#c30000'}}>$ {total.toFixed(2)}</h1> // despesas maior que depositos cor vermelha
            : <h1 style={{color:'#016ab4'}}>$ {total.toFixed(2)}</h1> // despesas menor que depositos cor azul
          } 
        </div>

        <div className="balanco-valores-container">
          <h5 >Depósitos: ${Math.abs(depositosTotal).toFixed(2)}</h5>
          <h5 >Despesas:  -${Math.abs(despesasTotal).toFixed(2)}</h5>
        </div>
        
      </div>

      <Form/>

      <div className="transactions-list">
          {
            transactions.map( ({ index,title,typeTransaction,amount }) => {
              return ( 
                        <Transactions 
                          key={index}
                          title={title}
                          typeTransaction={typeTransaction}
                          amount={amount}
                        /> 
              )
            })
          }
      </div>

       
        
    </div>
  );
}

export default App;
