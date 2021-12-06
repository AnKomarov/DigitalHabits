import { useDispatch, useSelector } from 'react-redux';
import './App.css';


function App() {
  const store = useSelector(store => store)
  const dispatch = useDispatch()

  console.log('store -- ', store);
    return (
      // <div className='app'>
      //   {children.map(child => <Item key={ child.id } itemName={ child.title }/>)}
      // </div>
      <div>
        <button onClick={() => dispatch({ type: 'ADD_DATA', parent_id: 30000 })}>QLICK</button>
        <button onClick={() => dispatch({ type: 'ADD_DATA', parent_id: 30001 })}>QLICK2</button>
        <button onClick={() => dispatch({ type: 'ADD_DATA', parent_id: 30007 })}>QLICK3</button>
      </div>
    )
}

export default App;
