const UPDATE_COUNT_NAME = 'UPDATE_COUNT_NAME'

export const updateName = value => ({
  type: UPDATE_COUNT_NAME,
  payload: value
})

const initialState = {
  name: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COUNT_NAME: {
      return {
        ...state,
        name: action.payload
      }
    }
    default:
      return state
  }
}
