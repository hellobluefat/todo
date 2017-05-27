import React from 'react'
export default class Form extends React.Component{
  render(){
    return(
      <div className="form">
        <form>
          <input type='text' placeholder='请输入...' className="text"/>
          <input type='submit' className="submit" value=""/>
        </form>
      </div>
    )
  }
}
