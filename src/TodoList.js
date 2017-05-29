import React from 'react'
import store from './redux/store.js'
import { connect } from 'react-redux'
class TodoList extends React.Component{

  handleClick(id){
    console.log(id)
    store.dispatch({
      type: 'ADD_TODO',
      index: id - 1
     }
   )

  }
  render(){
    let todos
    if(this.props.action === 'SHOW_COMPLETED'){
      todos = this.props.comments.filter(item => item.completed)
    }
    if(this.props.action === 'SHOW_ALL'){
      todos = this.props.comments
    }
    console.log(this.props.action)
    let list = todos.map(item=><li key={Math.random()} onClick={this.handleClick.bind(this,item.id)} className={item.completed ? 'completed' : '' }>{item.content}</li>)
    return(
      <div className="todo-list">
        <div className="container">
          <ul>
          {list}
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments: state.comments,
  action:state.action
})


export default connect(mapStateToProps)(TodoList)
