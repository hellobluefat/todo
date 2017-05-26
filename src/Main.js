import React from 'react'

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
class Header extends React.Component{
  render(){
    return(
      <div className="header">
        TODO
      </div>
    )
  }
}
class TodoList extends React.Component{
  render(){
    return(
      <div className="todo-list">

      </div>
    )
  }
}
class Form extends React.Component{
  render(){
    return(
      <div className="form">

      </div>
    )
  }
}
class Action extends React.Component{
  render(){
    return(
      <div className="action">

      </div>
    )
  }
}
