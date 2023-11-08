import { useState } from "react"

import Answer from "~components/Answer"
import Header from "~components/Header"
import InputContainer from "~components/InputContainer"

function IndexPopup() {
  return (
    <div
      style={{
        padding: 4,
        width: 500,
        height: 500
      }}>
      <Header />
      <InputContainer />
      <Answer />
    </div>
  )
}

export default IndexPopup
