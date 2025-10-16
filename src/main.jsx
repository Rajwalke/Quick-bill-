import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import appStore from './utilis/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Left from './components/Left.jsx'
import Invoice from './components/Invoice.jsx'
import Frontpage from './components/Frontpage.jsx'

const appRoute=createBrowserRouter([
  {
    path:"/",
    element:<Frontpage/>
  },
  {
    path:"/quickbill",
    element:<Body/>
  }
])


createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <StrictMode>
      <RouterProvider router={appRoute} />
    </StrictMode>
  </Provider>
  ,
)
