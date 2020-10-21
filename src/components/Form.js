import React,{useState} from 'react';
import {useDispatch} from 'react-redux';


const Form = () => {

  const [title,setTitle] = useState('');
  const [typeTransaction,setTypeTransaction] = useState();
  const [amount,setAmount] = useState('');

  const [errorTitle,setErrorTitle] = useState('');
  const [errorTypeTransaction,setErrorTypeTransaction] = useState('');
  const [errorAmount,setErrorAmount] = useState('');

  const dispatch = useDispatch();

  const saveTransaction = () => {

    if(!title ){
      setErrorTitle('Please enter descrição');
      return;
    }

    if(typeTransaction === undefined || typeTransaction === '' ) {
      setErrorTypeTransaction('Escolha o tipo de transação');
      return;
    }

    if(!amount || amount <= 0 || amount.length < 1  || isNaN(amount)){
      setErrorAmount('Please enter number value');
      return ;
    }

    const transactionInfo = {
      title,
      typeTransaction,
      amount: parseInt(amount),
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

      {errorTitle ? <span style={{color:'red',textAlign:'left'}}><br/>{errorTitle}</span> : ''}
      {errorTypeTransaction ? <span style={{color:'red',textAlign:'center'}}><br/>{errorTypeTransaction}</span> : ''}
      {errorAmount ? <span style={{color:'red',textAlign:'right'}}><br/>{errorAmount}</span> : ''}

      <div className="form-container">

        <input type="text" value={title} onChange={e => {
          setTitle(e.target.value)
          setErrorTitle('')
        }} 
        placeholder="Descrição"
        />
        
        <select  value={typeTransaction} onChange={e => {
          setTypeTransaction(e.target.value)
          setErrorTypeTransaction('')
        }}>
          <option value="none" diasbled hidden>Tipo de transação</option>
          <option value="Deposito">Deposito</option>
          <option value="Despesa">Despesa</option>
        </select> 

        <input type="text" value={amount} onChange={e => {
          setAmount(e.target.value)
          setErrorAmount('')
        }} 
          placeholder="Valor" style={{textAlign:'right'}}/>
      </div>
       
      <div className="form-container-button">
        <button onClick={saveTransaction}>Adicionar nova transação +</button>
      </div>
    </div>
  );
}

export default Form;