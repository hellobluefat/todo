import React from 'react'
import Header from './Header.js'
import TodoList from './TodoList.js'
import Form from './Form.js'
import Action from './Action.js'
export default class Main extends React.Component{
  render(){
    return(
      <div className="main">
        <Header/>
        <TodoList/>
        <Form/>
        <Action/>
      </div>
    )
  }
}
