import { Outlet } from "react-router-dom"
import GeneralHeader from "../components/general/GeneralHeader"
import GeneralFooter from "../components/general/GeneralFooter"

function GeneralLayout() {

  return (
    <div className="general-theme">
      <GeneralHeader />
      <main className="general-main">
        <Outlet />
      </main>
      <GeneralFooter />
    </div>
  )
}

export default GeneralLayout