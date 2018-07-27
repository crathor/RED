import store from './redux/store'
import { incrementCount, decrementCount } from './redux/modules/counter'
import { updateName } from './redux/modules/name'

// let unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(incrementCount())
// store.dispatch(incrementCount())
// store.dispatch(incrementCount())
// store.dispatch(incrementCount())

// unsubscribe()

const incrementButton = document.getElementById('increment')
const decrementButton = document.getElementById('decrement')
const count = document.getElementById('count')

count.textContent = null
incrementButton.addEventListener('click', () => {
  store.dispatch(incrementCount())
  count.innerHTML = store.getState().counter.count
})
decrementButton.addEventListener('click', () => {
  store.dispatch(decrementCount())
  count.innerHTML = store.getState().counter.count
})

const nameInput = document.getElementById('name')
const countedName = document.getElementById('counted-name')

nameInput.addEventListener('input', event => {
  store.dispatch(updateName(event.target.value))
  countedName.innerHTML = store.getState().name.name
})
