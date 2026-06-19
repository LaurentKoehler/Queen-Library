import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './components/Album.css'
import './pages/AlbumDetails.css'
import './components/Header.css'
import './components/Footer.css'
import App from './App.tsx'
import AlbumDetails from './pages/AlbumDetails.tsx'
import Home from './pages/Home.tsx'


const router = createHashRouter(
  [{
    path: "/",
    element: <App />,
    children: [

      {
        index: true,
        element: <Home />
      },
      {
        path: "/album/:id",
        element: <AlbumDetails />
      }],
  }],
)
createRoot(document.getElementById('root')!).render(
  // <App />
  <RouterProvider router={router} />
)
