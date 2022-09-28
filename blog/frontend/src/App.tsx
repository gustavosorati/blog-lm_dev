import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/app.routes'
import { GlobalStyles } from './styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AppRoutes />

      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
