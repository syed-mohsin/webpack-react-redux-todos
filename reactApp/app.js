var Redux = require('redux');
var React = require('react');
var ReactDOM =require('react-dom');

const toggle = (t, action) => { return action.id === t.id ? Object.assign({},t,{completed: !t.completed}): t };

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {id: action.id, text: action.text, completed: false} ];
    case 'TOGGLE_TODO':
      return state.map(t => toggle(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
      
  }
};

const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});
const { createStore } = Redux;
const store = createStore(todoApp);
const { Component } = React;
let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return (
      <div>
        <input ref={node => {this.input = node;}} />
        <button onClick={() => {
          store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++
          });
          this.input.value='';
         }}>
         Add Todo
        </button>
         <ul>
           {this.props.todos.map(todo => <li 
            onClick={() => {store.dispatch({id: todo.id, type:'TOGGLE_TODO'})}}
            key={todo.id}
            style = {{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}
            >{todo.text}</li>)}
         </ul>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos}/>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();