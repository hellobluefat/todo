import React from 'react'
import store from './redux/store.js'
import { connect } from 'react-redux'
class Action extends React.Component{
  showAll() {
      store.dispatch({ type: 'SEE', filter: 'SHOW_ALL' })
    }

    showCompleted() {
      store.dispatch({ type: 'SEE', filter: 'SHOW_COMPLETED'})
    }
  render(){
    return(
      <div className="action">
        <div className='action-box'>
          <div onClick={this.showAll.bind(this)} className='list'></div>
          <div onClick={this.showCompleted.bind(this)} className='completed'></div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments: state.comments,
  action:state.action
})


export default connect(mapStateToProps)(Action)
