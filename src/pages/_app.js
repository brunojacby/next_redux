import '@/styles/globals.css'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { Counter } from '@/features/counter/Counter'

export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Counter />
  </Provider>
  )
}
