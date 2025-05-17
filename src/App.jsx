import { Outlet } from "react-router-dom"
import Naver from "./componet/Naver"


function App() {


  return (
    <>
      <Naver />
      <Outlet />
    </>
  )
}

export default App
