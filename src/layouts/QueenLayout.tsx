import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import QueenHeader from "../components/queen/QueenHeader"
import QueenFooter from "../components/queen/QueenFooter"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}


function QueenLayout() {

  return (
    <div className="queen-theme">
      <ScrollToTop />
      <QueenHeader />
      <main className="queen-main">
        <Outlet />
      </main>
      <QueenFooter />
    </div>
  )
}

export default QueenLayout
