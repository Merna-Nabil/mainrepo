import {ADD_REMINDER, REMOVE_REMINDER ,CLEAR_REMINDER} from '../actionTypes';

export const add_Reminder=(text , date)=>
{
   const action =
   {
       type : ADD_REMINDER,
       text ,
        date
   }
   return action
}
export const remove_reminder =(id)=>{
   const action={
      type:REMOVE_REMINDER,
      id 
   }
   console.log("remove" , action)
   return action
}
export const clear_reminder =()=> {
   const action ={
      type:CLEAR_REMINDER
   }
   return action
}