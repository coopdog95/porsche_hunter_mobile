import React, { useState } from 'react'
import AppRouter from './AppRouter'

export default function App() {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <AppRouter
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    />
  )
}
