import { combineReducers } from 'redux'

let comments = [
  {id:1,content:"todo",completed:false}
]


function commentReducer(state= comments, action) {

  switch (action.type) {
    case 'ADD_COMMENT':

      return [...state, {id:state.length+1,content:action.comment,completed:false}]
    case 'ADD_TODO':
      const i = action.index
      return [...state.slice(0,i), { ...state[i], completed : true}, ...state.slice(i + 1)]
    default:
      return state
  }
}
function actionReducer(state='SHOW_ALL',action){
  switch(action.type){
    case 'SEE':
      return action.filter
    default:
      return state
  }

}

const rootReducer = combineReducers({
  comments: commentReducer,
  action:actionReducer

})
export default rootReducer
