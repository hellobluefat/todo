import React from 'react'
import Main from './Main.js'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <div>
          <Main/>
        </div>
      </Provider>

    )
  }
}
