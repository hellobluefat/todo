import React from 'react'
export default class Action extends React.Component{
  render(){
    return(
      <div className="action">
        <div className='action-box'>
          <div className='list'></div>
          <div className='completed'></div>
        </div>
      </div>
    )
  }
}
