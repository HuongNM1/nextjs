import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../actions/actions'

function todo(state, action) {
      switch (action.type) {
            case ADD_TODO:
                  return {
                        id: action.id,
                        text: action.text,
                  }
            case DELETE_TODO:
                  state.splice(state.findIndex(x => x.id == action.id), 1);
                  return state;
            case EDIT_TODO:
                  state[state.findIndex(x => x.id == action.id)].text = action.text;
                  return state;
            default:
                  return state
      }
}
function todos(state = [], action) {
      switch (action.type) {
            case ADD_TODO:
                  return [
                        ...state,
                        todo(undefined, action)
                  ]
            case DELETE_TODO:
                  return [...todo(state, action)];
            case EDIT_TODO:
                  return [...todo(state, action)];
            default:
                  return state
      }
}
const todoApp = combineReducers({
      todos
})
export default todoApp