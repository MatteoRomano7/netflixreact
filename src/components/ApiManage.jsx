import React, { useState, useEffect } from "react"

const ApiManage = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?i=tt3896198&apikey=d163d1bb&s=harry%20potter"
        )
        if (!response.ok) {
          throw new Error("Network request failed")
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, []) // Array vuoto che va a riempirsi dopo il primo render

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default ApiManage
