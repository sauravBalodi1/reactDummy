export const inititalState={
    basket:[],
   
};
export const getBasketTotal=(basket)=>{
    console.log(basket)
    let total=0;
 
 for(let i=0;i<basket.length;i++)
 {
     total=basket[i]+59;
     console.log(total);
    
 }
 return total;
 
}
const reducer=(state,action)=>{
    console.log(state)
    switch(action.type)
  {
      case "ADD_TO_BASKET":
          return{
              ...state,
              basket:[action.item]
              
          }
          case "REMOVE_FROM_BASKET":
              const index=state.basket.findIndex(
                  (basketItem)=>basketItem.id===action.id
              );
              
              let newBasket=[...state.basket];
             
              if(index>=0)
              {
               newBasket.splice(index,1);


              }
              else
              {
                  console.warn(`cant remove product (id: ${action.id}) as its not in basket!`)
              }
              return {
                  ...state,
                  basket:newBasket
              }
          
          default:
              return state;
  }
}
export default reducer