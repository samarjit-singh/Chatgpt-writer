import React from "react"

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "4px"
      }}>
      <h1>📝 ChatGPT Writer</h1>
      <p
        style={{
          color: "green",
          fontSize: "bold",
          backgroundColor: "lightcyan",
          padding: "1px 5px 6px",
          height: "10px",
          borderRadius: "5px"
        }}>
        PRO
      </p>
    </div>
  )
}

export default Header
