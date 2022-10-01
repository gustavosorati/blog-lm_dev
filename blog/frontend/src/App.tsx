import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import { AppRoutes } from './routes/app.routes'
import { GlobalStyles } from './styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />

      <GlobalStyles />
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
