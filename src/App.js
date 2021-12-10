import { useSelector } from 'react-redux';
import { Item } from './Components/Item'
import './App.css';


function App() {
  const data = useSelector(store => store.data) || []
  // const newData = []
  // data.forEach(element => {
  //   const filteredData = data.filter(f => element.id === f.parent_id)
  //   filteredData.forEach(elem => newData.push(elem))
  // });
  // console.log('newData - ', [...new Set(newData)]);
  console.log(data);
  return (
    <div className='container'>
      {data.map(item => (
        <Item
          key={item.id}
          itemName={item.title}
          id={item.id}
        />
      ))}
    </div>
  )
}

export default App;
