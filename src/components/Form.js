import React,{useState} from 'react';


const Form = () => {
  const [title,setTitle] = useState('');
  const [typeTransaction,setTypeTransaction] = useState('Tipo de transação');
  const [amount,setAmount] = useState('');

  return (
    <div className="form-main">

      <h3>Nova transação</h3>

      <div className="form-container">

        <input type="text" value={title} onchange={e => setTitle(e.target.value)} placeholder="Descrição"/>
        {/* <input type="text" value={typeTransaction} onchange={e => setTypeTransaction(e.target.value)} placeholder="Tipo de transação"/> */}

        <select  value={typeTransaction} onchange={e => setTypeTransaction(e.target.value)}>
          {/* <option value="Tipo de transação">Tipo de transação</option> */}
          <option value="Deposito">Deposito</option>
          <option value="Despesa">Despesa</option>
        </select> 

        <input type="text" value={amount} onchange={e => setAmount(e.target.value)} placeholder="Valor"/>
      </div>
       
      <div className="form-container-button">
        <button>Adicionar nova transação +</button>
      </div>
    </div>
  );
}

export default Form;