import {createStore} from 'redux';


const initialState = {
  transactions:[
    {id:1, title:'Conta de água',           typeTransaction:'Despesa',  amount:  -55},
    {id:2, title:'website - recebimento',   typeTransaction:'Deposito', amount:  150},
    {id:3, title:'Cartão de credito',       typeTransaction:'Despesa',  amount: -245},
    {id:4, title:'Dr. Roger - recebimento', typeTransaction:'Deposito', amount:  350},
    {id:5, title:'Oi internet',             typeTransaction:'Despesa',  amount: -195},
    {id:6, title:'Trabalho Pagto',          typeTransaction:'Deposito', amount: 1350},
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