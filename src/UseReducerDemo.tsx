import React, { useReducer } from 'react';
type Action = { type: 'add'; text: string };
interface Todo {
  text: string;
  complete: boolean;
}
type State = Todo[];
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'add', text: '111' });
        }}
      ></button>
      {state[0]}
    </div>
  );
};
