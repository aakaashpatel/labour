import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Redux
// import { Provider } from 'react-redux'
// import { store } from './app/store'

// i18n (agar setup karoge)
// import './i18n'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </StrictMode>,
)