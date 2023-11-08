import { useState } from "react"

import Body from "~components/Body"
import Header from "~components/Header"

function IndexPopup() {
  return (
    <div
      style={{
        padding: 4,
        width: 500,
        height: 500,
        background: "linear-gradient(to right, #A9A9A9, #A0E9FF)"
      }}>
      <Header />
      <Body />
    </div>
  )
}

export default IndexPopup
