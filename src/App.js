import './App.css';
import Control from './Components/Control/Control';
import Counter from './Components/Counter/Counter';

function App() {
  // a reducer function must have two parameters:(state, action)

  // const reducer = (state = {}, action) => {
  //   if (action.type === 'A') {
  //     return {
  //       ...state,
  //       A: 'i am A',
  //     }

  //   }
  //   else if (action.type === 'B') {
  //     return {
  //       ...state,
  //       B: 'i am B',
  //     }
  //   }
  //   return state;
  // }

  // const store = createStore(reducer)

  // store.subscribe(() => {

  //   console.log(store.getState().A);
  // })

  // store.subscribe(() => {
  //   console.log(store.getState().B);
  // })

  // store.dispatch({ type: 'A' })
  // store.dispatch({ type: 'B' })
  // store.dispatch({ type: 'C' })
  // store.dispatch({ type: 'something' })
  // store.dispatch({ type: 'something' })

  return (
    <div className="App">
      <h3>Hello Redux</h3>
      <Counter />
      <Control />
    </div>
  );
}

export default App;

// to do
// 1. create Reducer
// 2. create Store with the help of reducer
// 3. now we can subscribe
// 4. dispatch some action