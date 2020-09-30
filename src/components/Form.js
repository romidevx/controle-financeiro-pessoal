import React,{useState} from 'react';
import {useDispatch} from 'react-redux';


const Form = () => {
  const [title,setTitle] = useState('');
  const [typeTransaction,setTypeTransaction] = useState('Tipo de transação');
  const [amount,setAmount] = useState('');

  const dispatch = useDispatch();

  const saveTransaction = () => {
    const transactionInfo = {
      title,
      typeTransaction,
      amount,
      //id:transactions.length + 1
    }

    dispatch({
      type:'DEPOSITO',
      payload:transactionInfo
    });

  }

  return (
    <div className="form-main">

      <h3>Nova transação</h3>

      <div className="form-container">

        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Descrição"/>

        <select  value={typeTransaction} onChange={e => setTypeTransaction(e.target.value)}>
          <option value="Deposito">Deposito</option>
          <option value="Despesa">Despesa</option>
        </select> 

        <input type="text" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Valor"/>
      </div>
       
      <div className="form-container-button">
        <button onClick={saveTransaction}>Adicionar nova transação +</button>
      </div>
    </div>
  );
}

export default Form;