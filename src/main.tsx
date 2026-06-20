import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './components/queen/queen.css'
import './components/general/general.css'
import GeneralLayout from './layouts/GeneralLayout.tsx'
import HomeGeneral from './pages/HomeGeneral.tsx'
import QueenLayout from './layouts/QueenLayout.tsx'
import QueenHome from './pages/queen/QueenHome.tsx'
import AlbumDetails from './pages/AlbumDetails.tsx'


const router = createHashRouter(
  [
    {
      path: "/",
      element: <GeneralLayout />,
      children: [
        {
          index: true,
          element: <HomeGeneral />
        }
      ]
    },
    {
      path: "/queen",
      element: <QueenLayout />,
      children: [
        {
          index: true,
          element: <QueenHome />
        },
        {
          path: "album/:id",
          element: <AlbumDetails />
        },
      ]
    }
  ]
)
createRoot(document.getElementById('root')!).render(
  // <App />
  <RouterProvider router={router} />
)
