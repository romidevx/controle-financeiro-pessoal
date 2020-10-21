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
    }

    dispatch({
      type:'DEPOSITO',
      payload:transactionInfo
    });

    setTitle('');
    setTypeTransaction('');
    setAmount('');
  }

  return (
    <div className="form-main">

      <h3>Nova transação</h3>

      <div className="form-container">

        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Descrição"/>

        <select  value={typeTransaction} onChange={e => setTypeTransaction(e.target.value)}>
          <option value="none" diasbled hidden>Tipo de transação</option>
          <option value="Deposito">Deposito</option>
          <option value="Despesa">Despesa</option>
        </select> 

        <input type="text" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} placeholder="Valor" style={{textAlign:'right'}}/>
      </div>
       
      <div className="form-container-button">
        <button onClick={saveTransaction}>Adicionar nova transação +</button>
      </div>
    </div>
  );
}

export default Form;