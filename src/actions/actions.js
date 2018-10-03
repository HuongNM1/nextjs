export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

let nextTodoId = 0;

export function addTodo(text) {
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}

export function deleteTodo(id){
    return{
        type: DELETE_TODO,
        id: id
    }
}


export function editTodo(id, text){
    return{
        type: EDIT_TODO,
        id: id,
        text
    }
}