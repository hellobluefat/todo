import React from 'react'
import store from './redux/store.js'
import { connect } from 'react-redux'
class Form extends React.Component{
  handleClick(e) {
    let val = this.input.value
    // console.log(this.props.comments)
    e.preventDefault()
    this.refs.cForm.reset()
    store.dispatch({
      type: 'ADD_COMMENT',
      comment: val
     }
   )
     console.log(this)
  }
  render(){
    return(
      <div className="form">
        <form ref="cForm">
          <input type='text' placeholder='请输入...' className="text" ref={input=>this.input=input}/>
          <input type='submit' className="submit" value="" onClick={this.handleClick.bind(this)}/>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments: state
})


export default connect(mapStateToProps)(Form)
