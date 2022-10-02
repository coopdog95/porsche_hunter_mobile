import React, { useState } from 'react'
import AppRouter from './AppRouter'

export default function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [userId, setUserId] = useState(null)

  return (
    <AppRouter
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
      userId={userId}
      setUserId={setUserId}
    />
  )
}
