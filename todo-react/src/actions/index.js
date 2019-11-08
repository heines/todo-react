export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let nextTodoId = 0;
// // アロー関数において、object リテラル式を返す場合は、本体を丸括弧 () で囲みます:
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text: text // 同じ場合は略記法としてtextのみにできる
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter: filter
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
