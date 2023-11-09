import React, { useEffect, useState } from "react"

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0

    const typingInterval = setInterval(() => {
      setDisplayedText((prevText) => prevText + text.charAt(index))
      index++

      if (index === text.length) {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [text])

  return <p>{displayedText}</p>
}

export default TypingEffect
