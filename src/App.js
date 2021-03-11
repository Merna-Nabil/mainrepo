import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import {connect} from 'react-redux'
import {add_Reminder,remove_reminder,clear_reminder} from './actions/actions';

class  App extends Component{
  state = {
    text : '',
    date : new Date()
  }

  render_Reminders =() => {
     const {reminders} =this.props;
     return (
       <ul className='list-group'>
        {
          reminders.map(reminder =>  {
            return (
              <li key={reminder.id} className='list-group-item'>
                <div>{reminder.text} </div>
                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                <div className='remove btn btn-danger'  onClick={()=> {this.props.remove_reminder(reminder.id) }}>x</div>
              </li>
            )
          })
        }
       </ul>
     )
  }
  render(){
    return (
      <div className="App">
       <img src="" alt=""/>
       <div className="reminder-title">
        <h2>what is your opinion</h2>
       </div>
       
         <input type="text" value={this.state.text}
         placeholder="type here"
         className="form-control"
         onChange={(e)=> this.setState({
           text:e.target.value})}/>
         <input type="date" 
         className="form-control" value={this.state.date}
          onChange={(e)=> this.setState({date:e.target.value})}/>
         <button onClick={() => {this.props.add_Reminder(this.state.text,this.state.date)
         {this.setState({text:'', date :''})}} }
         className="btn btn-primary btn-block"> Add Reminder </button>
          {this.render_Reminders()}
         <button onClick={()=> this.props.clear_reminder()}
         className="btn btn-danger btn-block"> Clear Reminder</button>
      </div>
    );
  }

}

export default connect(state => {return {reminders:state}}, {add_Reminder,remove_reminder,clear_reminder}) (App);
