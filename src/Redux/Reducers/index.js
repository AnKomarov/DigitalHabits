const initialState = []
  
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_INITIAL_DATA':
      return {
        ...state,
        data: [...action.payload.children.map(child => {
          return {
            ...child,
            parent_id: child.id
          }

        })]
      }
    case 'ADD_DATA':
      if(action.payload) {
        return {
          data: [...new Map([...state.data,
            ...action.payload.children.map(child => {
              return {
                ...child,
                parent_id: action.payload.id
              }
            })
          ].map(item => [item['id'], item])).values()]
       }
      } else
      return {
        ...state
      }
      default: return state
  }
}/* [...new Map(addData.map(item => [item['id'], item])).values()] */