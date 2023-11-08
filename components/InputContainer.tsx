import React, { useState } from "react"

const InputContainer = () => {
  const [inputText, setInputText] = useState("")
  const [output, setOutput] = useState("")

  const callAPI = async () => {
    const apiUrl =
      "https://api-inference.huggingface.co/models/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5"
    const authToken = "Bearer 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"
    const requestData = {
      inputs: inputText
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      })

      if (response.ok) {
        const data = await response.json()
        const generatedText = data[0].generated_text
        console.log("response", generatedText)
        setOutput(generatedText)
      } else {
        console.error("API call failed")
      }
    } catch (error) {
      console.error("An error occurred:", error)
    }
  }

  return (
    <div>
      <h3
        style={{
          fontSize: "bold"
        }}>
        ✒️ Write a message
      </h3>
      <input
        type="text"
        placeholder="Write your prompt here"
        style={{
          width: 490,
          borderRadius: "4px",
          background: "linear-gradient(to right, #FFEED9, #E0F4FF)",
          height: 30
        }}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        style={{
          marginTop: "12px",
          border: "1px",
          height: "30px",
          width: "70px",
          background: "linear-gradient(to right, #FFEED9, #E0F4FF)",
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onClick={callAPI}>
        Generate
      </button>
      <p>{output}</p>
    </div>
  )
}

export default InputContainer
