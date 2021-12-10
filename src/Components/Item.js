import { useDispatch } from 'react-redux';

export const Item = ({ itemName, id }) => {
  const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch({ type: 'ADD_DATA', parent_id: id })}>{ itemName }</div>
  )
}