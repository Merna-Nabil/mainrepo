 import {ADD_REMINDER, REMOVE_REMINDER,CLEAR_REMINDER} from '../actionTypes'
 const reminders =(state=[] , action)=>
{
    let reminders =null;
    if (action.type===ADD_REMINDER)
    {
        reminders =[...state ,{
            text:action.text ,
            date: `${(action.date).getFullYear()}/${(action.date).getMonth() + 1}/${(action.date).getDate()} ` ,
            
            id :Math.random()}]
        return reminders
        
    } else if (action.typ===REMOVE_REMINDER){
          reminders=state.filter (reminder => reminder.id!==action.id)
          return reminders
    } else if (action.type===CLEAR_REMINDER) {
        reminders=[]
        return reminders
    }
    else {
        return state
    }
    
}
export default reminders;