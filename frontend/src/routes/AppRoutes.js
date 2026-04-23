
import { useState } from "react"
import Home from "../pages/Home"
import Shop from "../pages/Shop"

export default function AppRoutes(){
  const [route] = useState(window.location.hash)

  if(route === "#/shop") return <Shop />
  return <Home />
}
