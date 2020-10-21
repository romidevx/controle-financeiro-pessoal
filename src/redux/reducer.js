import {createStore} from 'redux';


const initialState = {
  transactions:[
    {id:1, title:'Conta de água',           typeTransaction:'Despesa',  amount:  55},
    {id:2, title:'Pagamento - recebimento', typeTransaction:'Deposito', amount:  550},
    {id:3, title:'Cartão de crédito',       typeTransaction:'Despesa',  amount: 245},
    
  ]
}

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {

    case 'DEPOSITO':{

      console.log('recebido pelo reducer -> ',action.payload)
      return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
  }
    
    default:
      return state;
  }
  
}

const store = createStore(reducer,initialState);

export default store;