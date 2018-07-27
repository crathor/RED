const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'

export const incrementCount = () => ({
  type: INCREMENT_COUNT
})
export const decrementCount = () => ({
  type: DECREMENT_COUNT
})

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case INCREMENT_COUNT: {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case DECREMENT_COUNT: {
      let count = state.count - 1
      if (count <= 0) {
        count = 0
      }
      return {
        ...state,
        count
      }
    }
    default:
      return state
  }
}
